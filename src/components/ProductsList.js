import React, { Component } from 'react';

class ProductsList extends Component {
	render() {
		const { products } = this.props;
		return (
			<section className='row'>
				<div className='products-list-container'>{products}</div>
			</section>
		);
	}
}

export default ProductsList;
