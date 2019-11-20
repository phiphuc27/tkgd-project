import React, { Component } from 'react';
import {
	HomeRounded,
	AccountCircleRounded,
	ShoppingCartRounded
} from '@material-ui/icons';

import Container from '@material-ui/core/Container';

import { Link } from 'react-router-dom';

export default class Navbar extends Component {
	render() {
		return (
			<nav>
				<Container maxWidth='lg'>
					<div className='navbar'>
						<div className='nav-logo'>
							<Link to='/'>
								<HomeRounded />
								<span>LOGO</span>
							</Link>
						</div>
						<div className='nav-search'>Search Bar</div>
						<div className='nav-user'>
							<AccountCircleRounded />
						</div>
						<div className='nav-cart'>
							<Link to='/cart'>
								<ShoppingCartRounded />
							</Link>
						</div>
					</div>
					<div className='menubar'>menubar</div>
				</Container>
			</nav>
		);
	}
}
