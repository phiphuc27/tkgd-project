import React, { Component } from 'react';
import Title from './Title';

class FeaturedProducts extends Component {
	render() {
		const { title, products } = this.props;
		return (
			<section className='featured-products'>
				<Title title={title} />
				<div className='featured-products-container'>{products}</div>
			</section>
		);
	}
}

export default FeaturedProducts;
