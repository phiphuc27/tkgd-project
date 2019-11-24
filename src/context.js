import React, { Component } from 'react';
import items from './data';
const ProductContext = React.createContext();

class ProductProvider extends Component {
	constructor(props) {
		super(props);
		this.state = {
			products: [],
			sortedProducts: [],
			newProducts: [],
			trendingProducts: []
		};
	}
	componentDidMount() {
		let products = items;
		let newProducts = products.filter(product => product.new === true);
		let trendingProducts = products.filter(
			product => product.trending === true
		);
		this.setState({
			products,
			newProducts,
			trendingProducts,
			sortedProducts: products
		});
	}
	render() {
		return (
			<ProductContext.Provider value={{ ...this.state }}>
				{this.props.children}
			</ProductContext.Provider>
		);
	}
}

const ProductConsumer = ProductContext.Consumer;

export { ProductConsumer, ProductProvider, ProductContext };
