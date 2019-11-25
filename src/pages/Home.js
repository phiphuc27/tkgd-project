import React, { Component } from 'react';
import { ProductContext } from '../context';
import Banner from '../components/Banner';
import Products from '../components/Products';
import Product from '../components/Product';

class Home extends Component {
	static contextType = ProductContext;
	render() {
		let { newProducts, trendingProducts } = this.context;
		newProducts = newProducts.map(product => {
			return <Product key={product.id} product={product} />;
		});
		trendingProducts = trendingProducts.map(product => {
			return <Product key={product.id} product={product} />;
		});
		return (
			<div>
				<Banner />
				<div className='container-fluid'>
					<Products title='sản phẩm mới nhất' products={newProducts} />
					<Products title='sản phẩm nổi bật' products={trendingProducts} />
				</div>
			</div>
		);
	}
}

export default Home;
