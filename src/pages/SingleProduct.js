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
			selectedColor: '0'
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
	};

	buyNow = () => {
		this.addToCart();
		this.props.history.push('/cart');
	};

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
						<h4>{name}</h4>
						<h3>
							<NumberFormat
								value={price}
								displayType='text'
								thousandSeparator={true}
								suffix={'₫'}
							/>
						</h3>
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
