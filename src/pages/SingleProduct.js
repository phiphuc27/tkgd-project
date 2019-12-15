import React, { Component } from 'react';
import { Breadcrumbs, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { ProductContext } from '../context';
import Product from '../components/Product';
import SimilarProduct from '../components/FeaturedProducts';
import NumberFormat from 'react-number-format';

export default class SingleProduct extends Component {
	constructor(props) {
		super(props);
		this.state = {
			id: this.props.match.params.id,
			mainImg: 0,
			selectedSize: '0',
			selectedColor: '0',
			quantity: 1 
		};
	}

	static contextType = ProductContext;

	addToCart = () => {
		const cartItem = {
			id: this.state.id,
			size: parseInt(this.state.selectedSize, 10),
			color: parseInt(this.state.selectedColor, 10)
		};
		this.context.addCart(cartItem);
		this.updateContextQuantity();
		alert('Bạn đã thêm 1 sản phẩm vào giỏ hàng');
	};

	buyNow = () => {
		const cartItem = {
			id: this.state.id,
			size: parseInt(this.state.selectedSize, 10),
			color: parseInt(this.state.selectedColor, 10)
		};
		this.context.addCart(cartItem);
		this.updateContextQuantity();
		this.props.history.push('/cart');
	};

	updateQuantity(x) {
		if (this.state.quantity === 1 && x < 0) return;
		let quantity = this.state.quantity + x;
		this.setState({
			quantity: quantity
		});
	}

	updateContextQuantity() {
		let carts = this.context.carts;
		for (let i = 0; i < carts.length; i++) {
			if (
				carts[i].id === this.state.id &&
				carts[i].size === parseInt(this.state.selectedSize, 10) &&
				carts[i].color === parseInt(this.state.selectedColor, 10)
			) {
				carts[i].quantity += this.state.quantity - 1;
				this.context.updateCart(carts);
				return;
			}
		}
	}

	render() {
		const { getProduct, getSimilarTypeProduct } = this.context;
		const { selectedColor, selectedSize } = this.state;
		const product = getProduct(this.state.id);

		if (!product) {
			return (
				<div className='error'>
					<h3>Sản phẩm này không tồn tại!</h3>
				</div>
			);
		}

		const { name, type, color, description, size, price, images } = product;
		const mainImage = images[this.state.mainImg];
		const similarProduct = getSimilarTypeProduct(type, this.state.id).map(
			product => {
				return (
					<Product
						key={product.id}
						product={product}
						onClick={id => this.context.addCart(id)}
					/>
				);
			}
		);
		return (
			<div className='container'>
				<br />
				<Breadcrumbs aria-label='breadcrumb'>
					<Link to='/'>Trang chủ</Link>
					<Link to='/products'>Thời trang {type}</Link>
					<Typography color='textPrimary'>{name}</Typography>
				</Breadcrumbs>

				<section className='single-product'>
					<div className='single-product-images'>
						<div className='main-image'>
							<img src={mainImage} alt={name} />
						</div>
						<div className='sub-images'>
							{images.map((image, index) => {
								return (
									<img
										className={
											this.state.mainImg === index ? 'img-selected' : ''
										}
										key={index}
										src={image}
										alt={name}
										onClick={() => this.setState({ mainImg: index })}
									/>
								);
							})}
						</div>
					</div>
					<div className='single-product-info'>
						<h3>{name}</h3>
						<h6>
							<NumberFormat
								value={price}
								displayType='text'
								thousandSeparator={true}
								suffix={'₫'}
							/>
						</h6>
						<hr />
						<div className='product-size'>
							<h4>Kích cỡ</h4>
							<div className='product-size-groups'>
								{size.map((item, index) => {
									return (
										<label key={index} htmlFor={item}>
											<input
												type='radio'
												name='size'
												id={item}
												value={index}
												checked={selectedSize === `${index}`}
												onChange={e =>
													this.setState({ selectedSize: e.target.value })
												}
											/>
											<span>{item}</span>
										</label>
									);
								})}
							</div>
						</div>

						<div className='product-color'>
							<h4>Màu sắc</h4>
							<div className='product-color-groups'>
								{color.map((item, index) => {
									return (
										<label key={index} htmlFor={item}>
											<input
												type='radio'
												name='color'
												id={item}
												value={index}
												checked={selectedColor === `${index}`}
												onChange={e =>
													this.setState({ selectedColor: e.target.value })
												}
											/>
											<span style={{ backgroundColor: item }}></span>
										</label>
									);
								})}
							</div>
						</div>
						<hr />
						<div className='product-description'>
							<pre>{description}</pre>
						</div>
						<hr />
						<div className='row'>
							<div className="col-3">Sổ lượng: </div>	
							<div className='input-group col-5'>
								<div
									className='input-group-prepend'
									onClick={() => this.updateQuantity(-1)}
									>
									<button className='cart-button'>-</button>
								</div>
								<input
									type='text'
									className='form-control'
									style={{ width: '34px' }}
									aria-label='Amount'
									value={this.state.quantity}
									onChange={e => {
										let quantity = parseInt(e.target.value)
										if(isNaN(quantity)){
											console.log(quantity)
										}
										else if(quantity == 0) {
											this.setState({
												quantity: 1
											})	
										}
										else if(quantity <= 100){
											this.setState({
												quantity: quantity
											})
										}
										else {
											this.setState({
												quantity: 100
											})		
										}
									}}																	
								/>
								<div
									className='input-group-append'
									onClick={() => this.updateQuantity(1)}
									>
									<button className='cart-button'>+</button>
								</div>
							</div>
						</div>
						<div className='product-buttons'>
							<button className='btn btn-buy' onClick={this.addToCart}>
								Thêm vào giỏ hàng
							</button>
							<button className='btn btn-buy' onClick={this.buyNow}>
								Mua ngay
							</button>
						</div>
					</div>
				</section>
				<SimilarProduct
					title='các sản phẩm tương tự'
					products={similarProduct}
				/>
			</div>
		);
	}
}
