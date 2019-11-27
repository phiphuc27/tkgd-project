/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import {
	FaFacebookF,
	FaTwitter,
	FaLinkedinIn,
	FaDribbble
} from 'react-icons/fa';

function Footer() {
	return (
		<footer className='site-footer'>
			<div className='container'>
				<div className='row'>
					<div className='col-sm-12 col-md-6'>
						<h6>Giới thiệu</h6>
						<p className='text-justify'>
							Lorem ipsum dolor sit amet consectetur adipisicing elit.
							Reiciendis possimus, necessitatibus ratione distinctio aperiam
							eaque. Dolorem molestiae ex quaerat quibusdam rerum illo delectus
							tenetur, accusantium, nihil sequi repellat, ab quasi perferendis
							illum sapiente unde eius porro perspiciatis? Veniam itaque
							explicabo vitae est, doloribus quis similique reiciendis fugiat
							cumque, harum vel.
						</p>
					</div>

					<div className='col-xs-6 col-md-3'>
						<h6>Danh mục</h6>
						<ul className='footer-links'>
							<li>
								<a href='#'>Trang chủ</a>
							</li>
							<li>
								<a href='#'>Thời trang nam</a>
							</li>
							<li>
								<a href='#'>Thời trang nữ</a>
							</li>
							<li>
								<a href='#'>Phụ kiện</a>
							</li>
							<li>
								<a href='#'>Ưu đãi</a>
							</li>
						</ul>
					</div>

					<div className='col-xs-6 col-md-3'>
						<h6>Liên kết</h6>
						<ul className='footer-links'>
							<li>
								<a href='#'>Giới thiệu</a>
							</li>
							<li>
								<a href='#'>Liên hệ</a>
							</li>
							<li>
								<a href='#'>Thành tựu</a>
							</li>
							<li>
								<a href='#'>Chính sách</a>
							</li>
							<li>
								<a href='#'>Bản đồ</a>
							</li>
						</ul>
					</div>
				</div>
				<hr />
			</div>
			<div className='container'>
				<div className='row'>
					<div className='col-md-8 col-sm-6 col-xs-12'>
						<p className='copyright-text'>
							Copyright &copy; 2019 All Rights Reserved by{' '}
							<a href='#'>Nhom 20</a>.
						</p>
					</div>

					<div className='col-md-4 col-sm-6 col-xs-12'>
						<ul className='social-icons'>
							<li>
								<a className='facebook' href='#'>
									<FaFacebookF />
								</a>
							</li>
							<li>
								<a className='twitter' href='#'>
									<FaTwitter />
								</a>
							</li>
							<li>
								<a className='dribbble' href='#'>
									<FaDribbble />
								</a>
							</li>
							<li>
								<a className='linkedin' href='#'>
									<FaLinkedinIn />
								</a>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</footer>
	);
}

export default Footer;
