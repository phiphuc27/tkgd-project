import React from 'react';
import { Link } from 'react-router-dom';

const Product = ({ product }) => {
	const { name, images, id, price } = product;
	const link = `/products/${id}`;
	return (
		<div className='card'>
			<div className='card-image'>
				<Link to={link}>
					<img src={images[0]} alt={name} />
					<div className='card-image-overlay'>
						<div className='btn-groups'>
							<Link className='btn btn-light' to={link}>
								Xem chi tiết
							</Link>
							<button className='btn btn-buy'>Mua ngay</button>
						</div>
					</div>
				</Link>
			</div>
			<div className='card-info'>
				<h6>
					<Link to={link}>{name}</Link>
				</h6>
				<p>{price} ₫</p>
			</div>
		</div>
	);
};

export default Product;
