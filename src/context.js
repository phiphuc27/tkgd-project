import React, { Component } from 'react';
import items from './data';
const ProductContext = React.createContext();

class ProductProvider extends Component {
	state = {
		products: [],
		sortedProducts: [],
		newProducts: [],
		trendingProducts: [],
		carts: JSON.parse(localStorage.getItem('carts')) || []
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
			sortedProducts: products
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

	addCart = item => {
		const { id, size, color } = item;
		let carts = this.state.carts;
		let cart = { ...item, quantity: 1 };
		for (let i = 0; i < carts.length; i++) {
			if (
				carts[i].id === id &&
				carts[i].size === size &&
				carts[i].color === color
			) {
				carts[i].quantity += 1;
				this.updateCart(carts);
				alert('Bạn đã thêm vào giỏ hàng thành công');
				return;
			}
		}
		carts.push(cart);
		this.setState(
			{
				carts: carts
			},
			() => {
				localStorage.setItem('carts', JSON.stringify(this.state.carts));
			}
		);
		alert('Bạn đã thêm vào giỏ hàng thành công');
	};

	updateCart = carts => {
		this.setState(
			{
				carts: carts
			},
			() => {
				localStorage.setItem('carts', JSON.stringify(this.state.carts));
			}
		);
	};

	emptyCart = () => {
		this.setState(
			{
				carts: []
			},
			() => {
				localStorage.removeItem('carts');
			}
		);
	};

	render() {
		return (
			<ProductContext.Provider
				value={{
					...this.state,
					getProduct: this.getProduct,
					getSimilarTypeProduct: this.getSimilarTypeProduct,
					addCart: this.addCart,
					updateCart: this.updateCart,
					emptyCart: this.emptyCart,
					selectedImage: this.selectedImage
				}}>
				{this.props.children}
			</ProductContext.Provider>
		);
	}
}

const ProductConsumer = ProductContext.Consumer;

export { ProductConsumer, ProductProvider, ProductContext };
