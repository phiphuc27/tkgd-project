import React, { Component } from 'react';

const ProductContext = React.createContext();

class ProductProvider extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	render() {
		return (
			<ProductContext.Provider value={{}}>
				{this.props.children}
			</ProductContext.Provider>
		);
	}
}

const ProductConsumer = ProductContext.Consumer;

export { ProductConsumer, ProductProvider, ProductContext };
