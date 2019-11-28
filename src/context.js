import React, { Component } from 'react';
import items from './data';
const ProductContext = React.createContext();

class ProductProvider extends Component {
	state = {
		products: [],
		sortedProducts: [],
		newProducts: [],
		trendingProducts: [],
		carts: [],
	};

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
			sortedProducts: products,
		});
	}

	getProduct = id => {
		let tmpProducts = [...this.state.products];
		const product = tmpProducts.find(product => product.id === id);
		return product;
	};

	getSimilarTypeProduct = (type, id) => {
		let tmpProducts = [...this.state.products];
		const product = tmpProducts.filter(
			product => product.type === type && product.id !== id
		);
		return product;
	};

	addCart = id => {
		let carts = this.state.carts;
		for(let i=0; i < carts.length; i++){
			if(carts[i].id===id) return;
		}
		let cart = {id: id, quantity: 1}
		carts.push(cart);
		this.setState({
			carts: carts
		});
	}

	updateCart = carts => {
		this.setState({
			carts: carts
		});
	}

	render() {
		return (
			<ProductContext.Provider
				value={{
					...this.state,
					getProduct: this.getProduct,
					getSimilarTypeProduct: this.getSimilarTypeProduct,
					addCart: this.addCart,
					updateCart: this.updateCart,
				}}>
				{this.props.children}
			</ProductContext.Provider>
		);
	}
}

const ProductConsumer = ProductContext.Consumer;

export { ProductConsumer, ProductProvider, ProductContext };
