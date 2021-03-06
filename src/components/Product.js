import React, { useState } from 'react';
import NumberFormat from 'react-number-format';
import ProductModal from './ProductModal';

const Product = ({ product, history }) => {
	const [modalShow, setModalShow] = useState(false);
	const { name, images, id, price } = product;
	const link = `/products/${id}`;
	return (
		<div>
			<div className='card'>
				<div className='card-image'>
					<a href={link}>
						<img src={images[0]} alt={name} />
					</a>
					<div className='card-image-overlay'>
						<div className='btn-groups'>
							<a href={link} className='btn btn-light'>
								Xem chi tiết
							</a>
							<button
								className='btn btn-buy'
								onClick={() => setModalShow(true)}>
								Mua ngay
							</button>
						</div>
					</div>
				</div>
				<div className='card-info'>
					<h6>
						<a href={link}>{name}</a>
					</h6>
					<p>
						<NumberFormat
							value={price}
							displayType='text'
							thousandSeparator={true}
							suffix={'₫'}
						/>
					</p>
				</div>
			</div>
			<ProductModal
				history={history}
				product={product}
				show={modalShow}
				onHide={() => setModalShow(false)}
			/>
		</div>
	);
};

export default Product;
