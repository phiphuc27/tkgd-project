import React from 'react';
import NumberFormat from 'react-number-format';

const Product = ({ product, onClick }) => {
	const { name, images, id, price } = product;
	const link = `/products/${id}`;
	return (
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
						<button className='btn btn-buy'>Mua ngay</button>
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
	);
};

export default Product;
