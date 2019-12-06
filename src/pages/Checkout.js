import React, { useState, useContext, useEffect } from 'react';
import { ProductContext } from '../context';
import moment from 'moment';
import 'moment/locale/vi';
import {
	ExpansionPanel,
	ExpansionPanelSummary,
	ExpansionPanelDetails,
	Breadcrumbs,
	Typography,
	FormControlLabel,
	Checkbox,
	Radio,
	RadioGroup,
	Button,
	TextField
} from '@material-ui/core';
import DateFnsUtils from '@date-io/date-fns';
import {
	MuiPickersUtilsProvider,
	KeyboardDatePicker
} from '@material-ui/pickers';
import { ExpandMore } from '@material-ui/icons';
import { Link } from 'react-router-dom';
import NumberFormat from 'react-number-format';
import SmallProduct from '../components/ProductSmall';
import useForm from 'react-hook-form';

const Checkout = () => {
	const [expanded, setExpanded] = useState(1);
	const [info, setInfo] = useState(
		JSON.parse(localStorage.getItem('info')) || {
			name: '',
			email: '',
			address: '',
			ward: '',
			district: '',
			phone: '',
			company: false
		}
	);
	useEffect(() => {
		localStorage.setItem('info', JSON.stringify(info));
	}, [info]);
	const [payment, setPayment] = useState('0');
	const [selectedDate, handleDateChange] = useState(new Date());
	const [gift, setGift] = useState(false);
	const [cartPrice, setCartPrice] = useState(0);
	const [shipPrice, setShipPrice] = useState('0');
	const [totalPrice, setTotalPrice] = useState(0);
	useEffect(() => {
		const tmpPrice = cartPrice + parseInt(shipPrice, 10);
		setTotalPrice(tmpPrice);
	}, [shipPrice, cartPrice]);
	const [cartItems, setCartItems] = useState([]);
	const { carts, getProduct, emptyCart } = useContext(ProductContext);
	useEffect(() => {
		let tempCarts = [];
		let price = 0;
		if (carts.length) {
			if (!cartItems.length) {
				for (let i = 0; i < carts.length; i++) {
					let product = getProduct(carts[i].id);
					if (product) {
						let quantity = carts[i].quantity;
						let size = product.size[carts[i].size];
						let color = product.color[carts[i].color];
						tempCarts = [...tempCarts, { ...product, quantity, size, color }];
						price += tempCarts[i].quantity * tempCarts[i].price;
					}
				}
				setCartItems(tempCarts);
				setCartPrice(price);
			}
		}
	}, [carts, cartItems, getProduct]);

	const { register, errors, handleSubmit } = useForm();

	const currentDate = moment().locale('vi');

	let products = cartItems;
	products = products.map(product => {
		return <SmallProduct key={product.id} product={product} />;
	});

	const handleChange = panel => (event, isExpanded) => {
		console.log('change panel');
		setExpanded(panel);
	};

	const onSelectCheckbox = e => {
		setInfo({ ...info, company: e.target.checked });
	};

	const onPaymentChange = e => {
		setPayment(e.target.value);
	};

	const onShippingChange = e => {
		setShipPrice(e.target.value);
	};

	const onChangeValue = (data, panel) => {
		setInfo({ ...info, ...data });
		if (panel) {
			setExpanded(panel);
		}
	};

	const completeOrder = e => {
		alert('Đặt mua thành công');
		emptyCart();
		window.location = '/';
	};

	return (
		<MuiPickersUtilsProvider utils={DateFnsUtils}>
			<div className='container'>
				<br />
				<Breadcrumbs aria-label='breadcrumb'>
					<Link to='/'>Trang chủ</Link>
					<Typography color='textPrimary'>Thanh toán</Typography>
				</Breadcrumbs>
				<div className='page-title'>
					<h4>Thanh toán</h4>
				</div>
				<div className='checkout'>
					<div className='info-panel'>
						<ExpansionPanel
							expanded={expanded === 1}
							onChange={handleChange(1)}>
							<ExpansionPanelSummary
								expandIcon={<ExpandMore />}
								aria-controls='panel1bh-content'
								id='panel1bh-header'
								className='info-header'>
								<Typography>1. Địa chỉ giao hàng</Typography>
							</ExpansionPanelSummary>
							<ExpansionPanelDetails>
								<form
									onSubmit={handleSubmit(data => onChangeValue(data, 2))}
									style={{ width: '100%' }}>
									<div className='address-form'>
										<div>
											<TextField
												required
												fullWidth
												error={errors.name ? true : false}
												name='name'
												placeholder='Họ và tên'
												label='Họ và tên'
												helperText={errors.name && errors.name.message}
												variant='outlined'
												margin='normal'
												inputRef={register({
													required: 'Bắt buộc'
												})}
												defaultValue={info.name}
											/>

											<TextField
												required
												fullWidth
												error={errors.address ? true : false}
												name='address'
												placeholder='Địa chỉ'
												label='Địa chỉ'
												helperText={errors.address && errors.address.message}
												variant='outlined'
												margin='normal'
												inputRef={register({
													required: 'Bắt buộc!'
												})}
												defaultValue={info.address}
											/>
											<TextField
												required
												fullWidth
												error={errors.ward ? true : false}
												name='ward'
												placeholder='Phường'
												label='Phường'
												helperText={errors.ward && errors.ward.message}
												variant='outlined'
												margin='normal'
												inputRef={register({
													required: 'Bắt buộc!'
												})}
												defaultValue={info.ward}
											/>
											<TextField
												required
												fullWidth
												error={errors.district ? true : false}
												name='district'
												placeholder='Quận'
												label='Quận'
												helperText={errors.district && errors.district.message}
												variant='outlined'
												margin='normal'
												inputRef={register({
													required: 'Bắt buộc!'
												})}
												defaultValue={info.district}
											/>
										</div>
										<div>
											<TextField
												required
												fullWidth
												error={errors.email ? true : false}
												name='email'
												placeholder='Email'
												label='Email'
												helperText={errors.email && errors.email.message}
												variant='outlined'
												margin='normal'
												inputRef={register({
													required: 'Bắt buộc'
												})}
												defaultValue={info.email}
											/>
											<TextField
												required
												fullWidth
												error={errors.phone ? true : false}
												name='phone'
												placeholder='Điện thoại'
												label='Điện thoại'
												helperText={errors.phone && errors.phone.message}
												variant='outlined'
												margin='normal'
												inputRef={register({
													required: 'Bắt buộc!'
												})}
												defaultValue={info.phone}
											/>
											<FormControlLabel
												control={
													<Checkbox
														defaultChecked={info.company}
														onChange={onSelectCheckbox}
														value='company'
														color='primary'
													/>
												}
												label='Đây là địa chỉ công ty'
											/>
										</div>
									</div>
									<Button
										type='submit'
										variant='contained'
										className='btn-buy'
										style={{
											width: '100%',
											fontSize: '1.1rem',
											marginBlockStart: '2em'
										}}>
										Lưu và tiếp tục
									</Button>
								</form>
							</ExpansionPanelDetails>
						</ExpansionPanel>
						<ExpansionPanel
							expanded={expanded === 2}
							onChange={handleChange(2)}>
							<ExpansionPanelSummary
								className='info-header'
								expandIcon={<ExpandMore />}
								aria-controls='panel2bh-content'
								id='panel2bh-header'>
								<Typography>2. Hình thức thanh toán</Typography>
							</ExpansionPanelSummary>
							<ExpansionPanelDetails>
								<form
									onSubmit={handleSubmit(handleChange(3))}
									style={{ width: '100%' }}>
									<RadioGroup
										aria-label='payment'
										name='payment'
										value={payment}
										onChange={onPaymentChange}>
										<FormControlLabel
											value='0'
											control={<Radio color='primary' />}
											label='Thanh toán khi nhận hàng'
										/>
										<FormControlLabel
											value='1'
											control={<Radio color='primary' />}
											label='Thanh toán bằng thẻ ngân hàng '
										/>
										{payment === '1' && (
											<div className='payment-form'>
												<TextField
													required
													fullWidth
													error={errors.card_number ? true : false}
													type='number'
													name='card_number'
													placeholder='Số thẻ'
													label='Số thẻ'
													helperText={
														errors.card_number && errors.card_number.message
													}
													variant='outlined'
													margin='normal'
													inputRef={register({
														required: 'Bắt buộc'
													})}
												/>
												<TextField
													required
													fullWidth
													error={errors.card_name ? true : false}
													name='card_name'
													placeholder='Họ tên trên thẻ'
													label='Họ tên trên thẻ'
													helperText={
														errors.card_name && errors.card_name.message
													}
													variant='outlined'
													margin='normal'
													inputRef={register({
														required: 'Bắt buộc'
													})}
												/>
												<KeyboardDatePicker
													autoOk
													variant='inline'
													inputVariant='outlined'
													views={['year', 'month']}
													format='MM/yy'
													margin='normal'
													label='Ngày hết hạn'
													value={selectedDate}
													onChange={handleDateChange}
												/>
												<TextField
													required
													fullWidth
													error={errors.card_cvc ? true : false}
													name='card_cvc'
													type='number'
													placeholder='Mã bảo mật'
													label='Mã bảo mật'
													helperText={
														errors.card_cvc && errors.card_cvc.message
													}
													variant='outlined'
													margin='normal'
													inputRef={register({
														required: 'Bắt buộc'
													})}
												/>
											</div>
										)}
										<FormControlLabel
											value='2'
											control={<Radio color='primary' />}
											label='Thanh toán bằng ví điện tử'
										/>
									</RadioGroup>
									<Button
										type='submit'
										variant='contained'
										className='btn-buy'
										style={{
											width: '100%',
											fontSize: '1.1rem',
											marginBlockStart: '2em'
										}}>
										Lưu và tiếp tục
									</Button>
								</form>
							</ExpansionPanelDetails>
						</ExpansionPanel>
						<ExpansionPanel
							expanded={expanded === 3}
							onChange={handleChange(3)}>
							<ExpansionPanelSummary
								className='info-header'
								expandIcon={<ExpandMore />}
								aria-controls='panel3bh-content'
								id='panel3bh-header'>
								<Typography>3. Hình thức giao hàng & xác nhận</Typography>
							</ExpansionPanelSummary>
							<ExpansionPanelDetails>
								<form
									onSubmit={handleSubmit(completeOrder)}
									style={{ width: '100%' }}>
									<div className='shipping-form'>
										<div className='shipping-gift'>
											<FormControlLabel
												control={
													<Checkbox
														defaultChecked={gift}
														onChange={e => setGift(e.target.checked)}
														value='company'
														color='primary'
													/>
												}
												label='Gửi quà tặng cho bạn bè, người thân'
											/>
											{gift && (
												<TextField
													fullWidth
													multiline
													error={errors.gift ? true : false}
													name='gift'
													placeholder='Lời nhắn'
													label='Lời nhắn'
													helperText={errors.gift && errors.gift.message}
													variant='outlined'
													inputRef={register({
														required: 'Bắt buộc'
													})}
												/>
											)}
										</div>
										<div className='shipping-cart'>{products}</div>
										<div className='shipping-method'>
											<Typography>
												<b>Hình thức giao hàng</b>
											</Typography>
											<RadioGroup
												aria-label='payment'
												name='payment'
												value={shipPrice}
												onChange={onShippingChange}>
												<FormControlLabel
													value='25000'
													control={<Radio color='primary' />}
													label={
														<div>
															<Typography>
																<b>Giao hàng nhanh - 25,000đ</b>
															</Typography>
															<Typography className='date-format'>
																Dự kiến giao vào trước 11:00 ngày mai{' '}
																<span>
																	{currentDate.add(1, 'd').format('DD/MM')}
																</span>
															</Typography>
														</div>
													}
												/>

												<FormControlLabel
													value='0'
													control={<Radio color='primary' />}
													label={
														<div>
															<Typography>
																<b>Giao hàng bình thường - miễn phí</b>
															</Typography>
															<Typography className='date-format'>
																Dự kiến giao vào{' '}
																<span>
																	{currentDate
																		.add(7, 'd')
																		.format('dddd, DD/MM')}
																</span>
															</Typography>
														</div>
													}
												/>
											</RadioGroup>
										</div>
									</div>
									<Button
										type='submit'
										variant='contained'
										className='btn-buy'
										style={{
											width: '100%',
											fontSize: '1.1rem',
											marginBlockStart: '2em'
										}}>
										Đặt mua
									</Button>
								</form>
							</ExpansionPanelDetails>
						</ExpansionPanel>
					</div>
					<div className='detail-panel'>
						<div className='row cart-col-2'>
							<div className='col-12'>
								<p className='row'>
									<span className='col-5'>Tạm tính:</span>
									<strong className='col-7'>
										<NumberFormat
											value={cartPrice}
											displayType='text'
											thousandSeparator={true}
											suffix={'₫'}
										/>
									</strong>
								</p>
							</div>
							<div className='col-12'>
								<p className='row'>
									<span className='col-5'>Phí vận chuyển:</span>
									<strong className='col-7'>
										<NumberFormat
											value={shipPrice}
											displayType='text'
											thousandSeparator={true}
											suffix={'₫'}
										/>
									</strong>
								</p>
								<hr />
							</div>

							<div className='col-12'>
								<p className='row'>
									<span className='col-5'>Thành tiền:</span>
									<strong className='col-7'>
										<NumberFormat
											value={totalPrice}
											displayType='text'
											thousandSeparator={true}
											suffix={'₫'}
										/>
									</strong>
									<span className='col-4'></span>
									<small className='col-8'>(Đã bao gồm thuế nếu có)</small>
								</p>
							</div>
						</div>
						{expanded !== 3 && (
							<div className='row detail-cart'>
								<div className='detail-cart-header'>
									<h5>
										<b>Giỏ hàng</b>
									</h5>
									<Link to='/cart'>Chỉnh sửa</Link>
								</div>
								<div className='detail-cart-list'>{products}</div>
							</div>
						)}
					</div>
				</div>
			</div>
		</MuiPickersUtilsProvider>
	);
};

export default Checkout;
