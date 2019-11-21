import React, { Component } from 'react';
import {
	HomeRounded,
	AccountCircleRounded,
	ShoppingCartRounded,
	SearchRounded
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
						<div className='nav-search'>
							<input type='text' placeholder='Tìm kiếm sản phẩm mong muốn...' />
							<button type='button'>
								<span>
									<SearchRounded />
									Tìm kiếm
								</span>
							</button>
						</div>
						<div className='nav-user'>
							<div className='user-info'>
								<AccountCircleRounded />
								<div>
									<h4>
										<b>Văn Văn</b>
									</h4>
									<span>Khách hàng thân thiết</span>
								</div>
							</div>

							<div className='dropdown-menu user-menu'>
								<ul>
									<li>Đơn hàng của tôi</li>
									<li>Tài khoản của tôi</li>
									<li>Sản phẩm đã xem</li>
									<li>Sản phẩm yêu thích</li>
									<hr />
									<li>Thoát tài khoản</li>
								</ul>
							</div>
						</div>
						<div className='nav-cart'>
							<Link to='/cart'>
								<ShoppingCartRounded />
								<span>2</span>
							</Link>
						</div>
					</div>
					<div className='menubar'>
						<ul>
							<li>
								<span>
									<Link to='/'>Trang chủ</Link>
								</span>
							</li>
							<li className='menu-man'>
								<span>Nam</span>
								<div className='dropdown-menu product-menu'>
									<ul>
										<li>
											<h4>Áo</h4>
										</li>
										<li>
											<Link to='/products'>Áo thun</Link>
										</li>
										<li>
											<Link to='/products'>Áo sơ mi</Link>
										</li>
										<li>
											<Link to='/products'>Áo khoác</Link>
										</li>
									</ul>
									<ul>
										<li>
											<h4>Quần</h4>
										</li>
										<li>
											<Link to='/products'>Quần dài</Link>
										</li>
										<li>
											<Link to='/products'>Quần tây</Link>
										</li>
										<li>
											<Link to='/products'>Quần short</Link>
										</li>
										<li>
											<Link to='/products'>Quần jean</Link>
										</li>
									</ul>
									<ul>
										<li>
											<h4>Khác</h4>
										</li>
										<li>
											<Link to='/products'>Đồ lót, đồ ngủ, đồ bơi</Link>
										</li>
										<li>
											<Link to='/products'>Tất, vớ</Link>
										</li>
										<li>
											<Link to='/products'>Nón</Link>
										</li>
									</ul>
								</div>
							</li>
							<li className='menu-woman'>
								<span>Nữ</span>
								<div className='dropdown-menu product-menu'>
									<ul>
										<li>
											<h4>Áo</h4>
										</li>
										<li>
											<Link to='/products'>Áo thun</Link>
										</li>
										<li>
											<Link to='/products'>Áo sơ mi</Link>
										</li>
										<li>
											<Link to='/products'>Áo khoác</Link>
										</li>
									</ul>
									<ul>
										<li>
											<h4>Quần</h4>
										</li>
										<li>
											<Link to='/products'>Quần dài</Link>
										</li>
										<li>
											<Link to='/products'>Quần tây</Link>
										</li>
										<li>
											<Link to='/products'>Quần short</Link>
										</li>
										<li>
											<Link to='/products'>Quần jean</Link>
										</li>
									</ul>
									<ul>
										<li>
											<h4>Khác</h4>
										</li>
										<li>
											<Link to='/products'>Đồ lót, đồ ngủ, đồ bơi</Link>
										</li>
										<li>
											<Link to='/products'>Tất, vớ</Link>
										</li>
										<li>
											<Link to='/products'>Nón</Link>
										</li>
									</ul>
								</div>
							</li>
							<li>
								<span>Phụ kiện</span>
							</li>
							<li>
								<span>Ưu đãi</span>
							</li>
							<li>
								<span>Liện hệ</span>
							</li>
						</ul>
					</div>
				</Container>
			</nav>
		);
	}
}
