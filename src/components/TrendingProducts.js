import React, { Component } from 'react';
import { ProductContext } from '../context';
import Title from './Title';
import Product from './Product';

class TrendingProducts extends Component {
	static contextType = ProductContext;
	render() {
		let { trendingProducts: products } = this.context;
		products = products.map(product => {
			return <Product key={product.id} product={product} />;
		});
		return (
			<section className='featured-products'>
				<Title title='sản phẩm nổi bật' />
				<div className='featured-products-container'>{products}</div>
			</section>
		);
	}
}

export default TrendingProducts;
