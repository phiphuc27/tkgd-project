import React from 'react';
import NumberFormat from 'react-number-format';
import { ShoppingCartRounded } from '@material-ui/icons';
import { Link } from 'react-router-dom';

const Product = ({ product, onClick }) => {
	const { name, images, id, price } = product;
	const link = `/products/${id}`;
	return (
		<div className='card'>
			<div className='card-image'>
				<Link to={link}>
					<img src={images[0]} alt={name} />
				</Link>
				<div className='card-image-overlay'>
					<div className='btn-groups'>
						<Link to={link} className='btn btn-light'>
							Xem chi tiết
						</Link>
						<button className='btn btn-buy'>Mua ngay</button>
						<button className='btn btn-buy' onClick ={() => onClick(id)}><ShoppingCartRounded /></button>
					</div>
				</div>
			</div>
			<div className='card-info'>
				<h6>
					<Link to={link}>{name}</Link>
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
