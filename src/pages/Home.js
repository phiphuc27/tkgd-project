import React, { Component } from 'react';
import { ProductContext } from '../context';
import Banner from '../components/Banner';
import FeaturedProducts from '../components/FeaturedProducts';
import Product from '../components/Product';

class Home extends Component {
	static contextType = ProductContext;
	render() {
		let { newProducts, trendingProducts } = this.context;
		newProducts = newProducts.map(product => {
			return (
				<Product
					key={product.id}
					product={product}
					history={this.props.history}
				/>
			);
		});
		trendingProducts = trendingProducts.map(product => {
			return (
				<Product
					key={product.id}
					product={product}
					history={this.props.history}
				/>
			);
		});
		return (
			<div>
				<Banner />
				<div className='container-fluid'>
					<FeaturedProducts title='sản phẩm mới nhất' products={newProducts} />
					<FeaturedProducts
						title='sản phẩm nổi bật'
						products={trendingProducts}
					/>
				</div>
			</div>
		);
	}
}

export default Home;
