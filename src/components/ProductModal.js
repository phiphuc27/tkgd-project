import React, { useState, useContext } from 'react';
import { ProductContext } from '../context';
import { Modal } from 'react-bootstrap';
import NumberFormat from 'react-number-format';

const ProductModal = ({ product, history, ...props }) => {
	const [selectedSize, setSize] = useState('0');
	const [selectedColor, setColor] = useState('0');
	const { id, name, price, size, color, images } = product;
	const { addCart } = useContext(ProductContext);

	const addToCart = () => {
		const cartItem = {
			id: id,
			size: parseInt(selectedSize, 10),
			color: parseInt(selectedColor, 10)
		};
		addCart(cartItem);
	};

	const buyNow = () => {
		addToCart();
		history.push('/cart');
	};

	return (
		<Modal {...props} aria-labelledby='contained-modal-title-vcenter' centered>
			<Modal.Header closeButton>
				<Modal.Title id='contained-modal-title-vcenter'>{name}</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				<div className='product-modal'>
					<div className='modal-image'>
						<img src={images[0]} alt={name} />
					</div>
					<div className='modal-info'>
						<h3>
							<NumberFormat
								value={price}
								displayType='text'
								thousandSeparator={true}
								suffix={'₫'}
							/>
						</h3>
						<div className='product-size'>
							<h4>
								<b>Chọn kích cỡ</b>
							</h4>
							<div className='product-size-groups'>
								{size.map((item, index) => {
									return (
										<label key={index} htmlFor={item}>
											<input
												type='radio'
												name='size'
												id={item}
												value={index}
												checked={selectedSize === `${index}`}
												onChange={e => setSize(e.target.value)}
											/>
											<span>{item}</span>
										</label>
									);
								})}
							</div>
						</div>
						<div className='product-color'>
							<h4>
								<b>Chọn màu sắc</b>
							</h4>
							<div className='product-color-groups'>
								{color.map((item, index) => {
									return (
										<label key={index} htmlFor={item}>
											<input
												type='radio'
												name='color'
												id={item}
												value={index}
												checked={selectedColor === `${index}`}
												onChange={e => setColor(e.target.value)}
											/>
											<span style={{ backgroundColor: item }}></span>
										</label>
									);
								})}
							</div>
						</div>
					</div>
				</div>
			</Modal.Body>
			<Modal.Footer>
				<button className='btn btn-secondary' onClick={props.onHide}>
					Hủy
				</button>
				<button className='btn btn-buy' onClick={buyNow}>
					Mua Ngay
				</button>
			</Modal.Footer>
		</Modal>
	);
};

export default ProductModal;
