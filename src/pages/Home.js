import React from 'react';
import Banner from '../components/Banner';
import NewProducts from '../components/NewProducts';
import TrendingProducts from '../components/TrendingProducts';

const Home = () => {
	return (
		<div>
			<Banner />
			<div className='container-fluid'>
				<NewProducts />
				<TrendingProducts />
			</div>
		</div>
	);
};

export default Home;
