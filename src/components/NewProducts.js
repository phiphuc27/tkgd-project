import React, { Component } from 'react';
import { ProductContext } from '../context';
import Title from '../components/Title';
import Product from '../components/Product';

class NewProducts extends Component {
	static contextType = ProductContext;
	render() {
		let { newProducts: products } = this.context;
		products = products.map(product => {
			return <Product key={product.id} product={product} />;
		});
		return (
			<section className='featured-products'>
				<Title title='sản phẩm mới nhất' />
				<div className='featured-products-container'>{products}</div>
			</section>
		);
	}
}

export default NewProducts;
