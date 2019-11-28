import React, { Component } from 'react';
import { ProductContext } from '../context';
import { Link } from 'react-router-dom';

export default class Cart extends Component {
	constructor(props) {
		super(props);
		this.state = {
			//products: this.props.products                  //[{id:... , quantity:... }]
			carts: [],
			totalPrice: 0,
		};
		
	}
	static contextType = ProductContext;

	delete(index){
		let carts = this.state.carts;
		carts.splice(index, 1);
		let totalPrice = 0;
		for(let i=0; i<carts.length; i++){
			totalPrice+=carts[i].quantity*carts[0].price;
		}
		this.setState({
			carts: carts,
			totalPrice: totalPrice,
		})
	}

	updateQuantity(index, x) {
		let carts = this.state.carts;
		let totalPrice = this.state.totalPrice;
		if(carts[index].quantity===1 && x<0) return;
		carts[index].quantity += x;
		totalPrice += carts[index].price*x;
		this.setState({
			carts: carts,
			totalPrice: totalPrice,
		})
	}

	inputQuantity(index, e){
		let carts = this.state.carts;
		e.target.value>0 ? carts[index].quantity = e.target.value: carts[index].quantity=1;
		let totalPrice = 0;
		for(let i=0; i<carts.length; i++){
			totalPrice+=carts[i].quantity*carts[0].price;
		}
		this.setState({
			carts: carts,
			totalPrice: totalPrice,
		})
	}

	render() {
		let {products} = this.context;
		var shoppingCart;
		if(products.length){
			if(!this.state.carts.length){
				let carts = [products[0], products[1]];
				carts[0].quantity = 1;
				carts[1].quantity = 2;
				let totalPrice = 0;
				for(let i=0; i<carts.length; i++){
					totalPrice+=carts[i].quantity*carts[0].price;
				}
				this.setState({
					carts: carts,
					totalPrice: totalPrice
				})
			}
			
			var carts = this.state.carts
			shoppingCart = carts.map((product, index) => {
				return (
					<div key={product.id} className='row cart-item'>
						<div className='col-xs-3 col-md-2'>
							<img className='cart-image' src={product.images[0]} alt={product.name}/>
						</div>
						<div className='col-xs-9 col-md-10'>
							<div className='row'>
								<div className='col-xs-7 col-md-7'>
									<div className='row'>
										<div className='col-12'><p>{product.name}</p></div>
										<div className='col-12'><p>{product.category}</p></div>
									</div>
								</div>
								<div className='col-xs-2 col-md-2'>
									<div><p><strong>{product.price}đ</strong></p></div>
								</div>
								<div className='col-xs-3 col-md-3'>
									<div className='row'>
										<div className='input-group col-12'>
											<div className='input-group-prepend' onClick={() => this.updateQuantity(index, -1)}>
												<button className='cart-button'>-</button>
											</div>
											<input type="text" className="form-control" aria-label="Amount" value={product.quantity} onChange={(e) => e.target.value <= 100 ? this.inputQuantity(index, e): ""}/>
											<div className='input-group-append' onClick={() => this.updateQuantity(index, 1)}>
												<button className='cart-button'>+</button>
											</div>
										</div>
										<div className='delete-product-in-cart col-12'>
											<button onClick={() => this.delete(index)}>Xóa</button>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				)
			})
		}
		return (
			<div className='container'>
				<div className='row'>
					<div className='page-title col-xs-12 col-md-12'>
						<h4>Cart</h4>
					</div>
					<div className='col-xs-8 col-md-8'>
						<div className='cart-col-1'>
							{shoppingCart}
						</div>
					</div>
					<div className='col-xs-3 col-md-4'>
						<div className='row cart-col-2'>
							<div className='col-12'>
								<p className='row'>
									<span className='col-4'>Tạm tính:</span>
									<strong className='col-8'>{this.state.totalPrice}</strong>
								</p>
							</div>
							<div className='col-12'>
								<p className='row'>
									<span className='col-4'>Thành tiền:</span>
									<strong className='col-8'>{this.state.totalPrice}</strong>
									<span className='col-4'></span>
									<small className='col-8'>(Đã bao gồm thuế nếu có)</small>
								</p>
							</div>
						</div>
						<div className='cart-check-out'>
							<Link to='/checkout'>
								<button type='button' className='btn btn-danger'>
									Tiến hành đặt hàng
								</button>
							</Link>
						</div>
					</div>
				</div>
			</div>	
		)
	}
}
