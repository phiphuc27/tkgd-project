import React from 'react';
import NumberFormat from 'react-number-format';

const Product = ({ product }) => {
	const { name, images, price, size, color, quantity } = product;
	return (
		<div className='small-card'>
			<div className='small-card-image'>
				<img src={images[0]} alt={name} />
			</div>
			<div className='small-card-info'>
				<h6>{name}</h6>
				<p>
					Màu:{' '}
					<span
						style={{
							display: 'inline-block',
							backgroundColor: color,
							width: '28px',
							height: '14px'
						}}></span>
				</p>
				<p>
					Size: <span style={{ textTransform: 'uppercase' }}>{size}</span>
				</p>
				<p>
					<NumberFormat
						value={price}
						displayType='text'
						thousandSeparator={true}
						suffix={'₫'}
					/>
				</p>
				<p>
					Số lượng: <span>{quantity}</span>
				</p>
			</div>
		</div>
	);
};

export default Product;
