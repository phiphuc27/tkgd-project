import React, { Component } from 'react';
import Category from '../components/Category';
import Product from '../components/Product';
import { ProductContext } from '../context';
import ProductsList from '../components/ProductsList';

export default class Products extends Component {
	static contextType = ProductContext;

	useQuery = () => {
		return new URLSearchParams(window.location.search);
	};

	render() {
		const { products, searchProduct } = this.context;
		let query = this.useQuery();
		const search = query.get('search');

		let productList;

		if (search) {
			productList = searchProduct(search);
		} else {
			productList = products;
		}

		productList = productList.map(product => {
			return <Product key={product.id} product={product} />;
		});
		return (
			<div style={{ marginBlockEnd: '5em' }}>
				<div style={{ display: 'flex' }}>
					<div
						className='col-md-3'
						style={{ paddingLeft: '50px', paddingRight: '10px' }}>
						<Category></Category>
					</div>
					<div className='col-md-9'>
						<div
							style={{
								paddingRight: '50px',
								marginBlockStart: '3em'
							}}>
							{search && (
								<h6 className='row'>
									Kết quả tìm kiếm cho&nbsp;
									<span style={{ fontWeight: 'bold' }}>"{search}"</span>:&nbsp;
									<span style={{ fontWeight: 'bold' }}>
										{productList.length}
									</span>
									&nbsp;sản phẩm.
								</h6>
							)}
							{productList.length > 0 ? (
								<ProductsList products={productList} />
							) : (
								<h4>Không tìm thấy sản phẩm</h4>
							)}
						</div>
					</div>
				</div>
			</div>
		);
	}
}
