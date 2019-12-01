import React, { Component } from 'react';
import Category from '../components/Category';
import Product from '../components/Product';
import { ProductContext } from '../context';
import ProductsList from '../components/ProductsList';

export default class Products extends Component {
  static contextType = ProductContext;

  render() {
    let { products } = this.context;
    products = products.map(product => {
      return <Product key={product.id} product={product} />;
    });
    return (
      <div className="row">
        <div className="col-md-3" style={{ paddingLeft: '50px', paddingRight:'10px' }}>
          <Category ></Category>
        </div>
        <div className="col-md-9">
          <div className="container" style={{ paddingLeft: '10px', paddingRight:'50px' }}>
            <ProductsList title="Đồ nữ" products={products} />
          </div>
        </div>
      </div>
    );
  }
}
