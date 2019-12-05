import React, { useContext } from 'react';
import { ProductContext } from './context';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Home from './pages/Home';
import Products from './pages/Products';
import SingleProduct from './pages/SingleProduct';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import Error from './pages/Error';

import { Route, Switch, Redirect } from 'react-router-dom';

import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
	const { carts } = useContext(ProductContext);
	return (
		<>
			<Navbar />

			<Switch>
				<Route exact path='/' component={Home} />

				<Route exact path='/products' component={Products} />

				<Route exact path='/products/:id' component={SingleProduct} />

				<Route exact path='/cart' component={Cart} />

				<Route exact path='/checkout' component={Checkout}>
					{carts.length === 0 && <Redirect to='/' />}
				</Route>
				<Route>
					<Error />
				</Route>
			</Switch>
			<Footer />
		</>
	);
}

export default App;
