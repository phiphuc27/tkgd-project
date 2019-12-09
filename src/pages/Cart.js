import React, { Component } from 'react';
import { ProductContext } from '../context';
import { Link } from 'react-router-dom';
import { Breadcrumbs, Typography } from '@material-ui/core';
import NumberFormat from 'react-number-format';

export default class Cart extends Component {
	constructor(props) {
		super(props);
		this.state = {
			carts: [],
			totalPrice: 0
		};
	}

	static contextType = ProductContext;

	delete(index) {
		let carts = this.state.carts;
		carts.splice(index, 1);
		let totalPrice = 0;
		for (let i = 0; i < carts.length; i++) {
			totalPrice += carts[i].quantity * carts[0].price;
		}

		let contextCarts = this.context.carts;
		contextCarts.splice(index, 1);
		this.context.updateCart(contextCarts);

		this.setState({
			carts: carts,
			totalPrice: totalPrice
		});
	}

	updateQuantity(index, x) {
		let carts = this.state.carts;
		let totalPrice = this.state.totalPrice;
		if (carts[index].quantity === 1 && x < 0) return;
		carts[index].quantity += x;
		totalPrice += carts[index].price * x;

		let contextCarts = this.context.carts;
		contextCarts[index].quantity += x;
		this.context.updateCart(contextCarts);

		this.setState({
			carts: carts,
			totalPrice: totalPrice
		});
	}

	inputQuantity(index, e) {
		let carts = this.state.carts;
		e.target.value > 0
			? (carts[index].quantity = e.target.value)
			: (carts[index].quantity = 1);
		let totalPrice = 0;
		for (let i = 0; i < carts.length; i++) {
			totalPrice += carts[i].quantity * carts[0].price;
		}

		let contextCarts = this.context.carts;
		contextCarts[index].quantity = carts[index].quantity;
		this.context.updateCart(contextCarts);

		this.setState({
			carts: carts,
			totalPrice: totalPrice
		});
	}

	render() {
		let carts = this.context.carts;
		var shoppingCart;
		if (carts.length) {
			if (!this.state.carts.length) {
				let tempCarts = [];
				let totalPrice = 0;
				for (let i = 0; i < carts.length; i++) {
					let product = this.context.getProduct(carts[i].id);
					if (product) {
						let quantity = carts[i].quantity;
						let size = product.size[carts[i].size];
						let color = product.color[carts[i].color];
						tempCarts = [...tempCarts, { ...product, quantity, size, color }];
						totalPrice += tempCarts[i].quantity * tempCarts[i].price;
						console.log(tempCarts[i]);
					}
				}

				this.setState({
					carts: tempCarts,
					totalPrice: totalPrice
				});
			}

			carts = this.state.carts;
			shoppingCart = carts.map((product, index) => {
				return (
					<div key={product.id} className='row cart-item'>
						<div className='col-xs-3 col-md-2'>
							<img
								className='cart-image'
								src={product.images[0]}
								alt={product.name}
							/>
						</div>
						<div className='col-xs-9 col-md-10'>
							<div className='row'>
								<div className='col-xs-6 col-md-6'>
									<div className='row'>
										<div className='col-12'>
											<h6>
												<a href={`/products/${product.id}`}>{product.name}</a>
											</h6>
										</div>
										<div
											className='col-8'
											style={{
												display: 'flex',
												justifyContent: 'space-between'
											}}>
											<p style={{ textTransform: 'capitalize' }}>
												{product.category}
											</p>
											/
											<p style={{ textTransform: 'uppercase' }}>
												{product.size}
											</p>
											/
											<span
												style={{
													background: product.color,
													width: '20px',
													height: '20px',
													margin: '0',
													border: '1px solid #022b3a'
												}}></span>
										</div>
									</div>
								</div>
								<div className='col-xs-2 col-md-2'>
									<div>
										<p>
											<strong>
												<NumberFormat
													value={product.price}
													displayType='text'
													thousandSeparator={true}
													suffix={'₫'}
												/>
											</strong>
										</p>
									</div>
								</div>
								<div className='col-xs-4 col-md-4'>
									<div className='row'>
										<div className='input-group col-12'>
											<div
												className='input-group-prepend'
												onClick={() => this.updateQuantity(index, -1)}>
												<button className='cart-button'>-</button>
											</div>
											<input
												type='text'
												className='form-control'
												style={{ width: '34px' }}
												aria-label='Amount'
												value={product.quantity}
												onChange={e =>
													e.target.value <= 100
														? this.inputQuantity(index, e)
														: ''
												}
											/>
											<div
												className='input-group-append'
												onClick={() => this.updateQuantity(index, 1)}>
												<button className='cart-button'>+</button>
											</div>
										</div>
										<div className='delete-product-in-cart col-12'>
											<button onClick={() => this.delete(index)}>Xóa</button>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				);
			});
			return (
				<div className='container cart'>
					<br />
					<Breadcrumbs aria-label='breadcrumb'>
						<Link to='/'>Trang chủ</Link>
						<Typography color='textPrimary'>Giỏ hàng</Typography>
					</Breadcrumbs>
					<div className='row'>
						<div className='page-title col-xs-12 col-md-12'>
							<h4>Giỏ hàng</h4>
						</div>
						<div className='col-xs-8 col-md-8'>
							<div className='cart-col-1'>{shoppingCart}</div>
							<button
								className='btn btn-secondary'
								onClick={() => this.props.history.push('/products')}>
								{' '}
								Tiếp tục mua hàng
							</button>
						</div>
						<div className='col-xs-3 col-md-4'>
							<div className='row cart-col-2'>
								<div className='col-12'>
									<p className='row'>
										<span className='col-4'>Tạm tính</span>
										<strong className='col-8'>
											<NumberFormat
												value={this.state.totalPrice}
												displayType='text'
												thousandSeparator={true}
												suffix={'₫'}
											/>
										</strong>
									</p>
									<hr />
								</div>

								<div className='col-12'>
									<p className='row'>
										<span className='col-4'>Thành tiền</span>
										<strong className='col-8'>
											<NumberFormat
												value={this.state.totalPrice}
												displayType='text'
												thousandSeparator={true}
												suffix={'₫'}
											/>
										</strong>
										<span className='col-4'></span>
										<small className='col-8'>(Đã bao gồm thuế nếu có)</small>
									</p>
								</div>
							</div>
							<div className='cart-check-out'>
								<Link to='/checkout'>
									<button type='button' className='btn btn-danger'>
										Tiến hành đặt hàng
									</button>
								</Link>
							</div>
						</div>
					</div>
				</div>
			);
		} else {
			return (
				<div className='container'>
					<div className='row'>
						<div className='page-title col-xs-12 col-md-12'>
							<h4>Giỏ hàng</h4>
						</div>
						<div className='row emty-cart col-xs-12 col-md-12'>
							<div className='col-xs-12 col-md-12'>
								<img
									className='emty-cart-image'
									src={require('../images/emtycart.jpg')}
									alt='emty cart'
								/>
							</div>
							<div className='col-xs-12 col-md-12'>
								Không có sản phẩm nàm trong giỏ hàng của bạn
							</div>
							<div className='col-xs-12 col-md-12'>
								<button
									style={{ marginBlockStart: '1em' }}
									className='btn btn-buy'
									onClick={() => this.props.history.push('/products')}>
									Tiếp tục mua hàng
								</button>
							</div>
						</div>
					</div>
				</div>
			);
		}
	}
}
