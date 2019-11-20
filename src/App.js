import React from 'react';
import './App.css';

import Home from './pages/Home';
import Products from './pages/Products';
import SingleProduct from './pages/SingleProduct';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import Error from './pages/Error';

import { Route, Switch } from 'react-router-dom';

import Navbar from './components/Navbar';
import Container from '@material-ui/core/Container';

function App() {
	return (
		<>
			<Navbar />
			<Container maxWidth='lg'>
				<Switch>
					<Route exact path='/'>
						<Home />
					</Route>
					<Route exact path='/products'>
						<Products />
					</Route>
					<Route exact path='/products/:slug'>
						<SingleProduct />
					</Route>
					<Route exact path='/cart'>
						<Cart />
					</Route>
					<Route exact path='/checkout'>
						<Checkout />
					</Route>
					<Route>
						<Error />
					</Route>
				</Switch>
			</Container>
		</>
	);
}

export default App;
