import React from 'react';
import { Link } from 'react-router-dom';
import { FiChevronsRight } from 'react-icons/fi';

const Title = ({ title }) => {
	return (
		<div className='section-title'>
			<h4>
				<Link to='/products'>{title}</Link>
			</h4>
			<p>
				<Link to='/products'>
					Xem thêm {title} <FiChevronsRight />
				</Link>
			</p>
		</div>
	);
};

export default Title;
