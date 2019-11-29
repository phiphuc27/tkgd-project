import React, { Component } from 'react';

class ProductsList extends Component {
  render() {
    const { title, products } = this.props;
    return (
      <section className="featured-products">
        <h4>{title}</h4>
        <br></br>
        <div className="productslist-container">{products}</div>
      </section>
    );
  }
}

export default ProductsList;
