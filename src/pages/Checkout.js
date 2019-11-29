import React, { useState, useContext } from 'react';
import { ProductContext } from '../context';
import {
	ExpansionPanel,
	ExpansionPanelSummary,
	ExpansionPanelDetails,
	Breadcrumbs,
	Typography
} from '@material-ui/core';
import { ExpandMore } from '@material-ui/icons';
import { Link } from 'react-router-dom';
import NumberFormat from 'react-number-format';

const Checkout = () => {
	const [expanded, setExpanded] = useState('panel1');
	const { cart } = useContext(ProductContext);

	const handleChange = panel => (event, isExpanded) => {
		setExpanded(panel);
	};
	return (
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
						expanded={expanded === 'panel1'}
						onChange={handleChange('panel1')}>
						<ExpansionPanelSummary
							expandIcon={<ExpandMore />}
							aria-controls='panel1bh-content'
							id='panel1bh-header'
							className='info-header'>
							<Typography>1. Địa chỉ giao hàng</Typography>
						</ExpansionPanelSummary>
						<ExpansionPanelDetails>
							<Typography>
								Nulla facilisi. Phasellus sollicitudin nulla et quam mattis
								feugiat. Aliquam eget maximus est, id dignissim quam.
							</Typography>
						</ExpansionPanelDetails>
					</ExpansionPanel>
					<ExpansionPanel
						expanded={expanded === 'panel2'}
						onChange={handleChange('panel2')}>
						<ExpansionPanelSummary
							className='info-header'
							expandIcon={<ExpandMore />}
							aria-controls='panel2bh-content'
							id='panel2bh-header'>
							<Typography>2. Hình thức thanh toán</Typography>
						</ExpansionPanelSummary>
						<ExpansionPanelDetails>
							<Typography>
								Donec placerat, lectus sed mattis semper, neque lectus feugiat
								lectus, varius pulvinar diam eros in elit. Pellentesque
								convallis laoreet laoreet.
							</Typography>
						</ExpansionPanelDetails>
					</ExpansionPanel>
					<ExpansionPanel
						expanded={expanded === 'panel3'}
						onChange={handleChange('panel3')}>
						<ExpansionPanelSummary
							className='info-header'
							expandIcon={<ExpandMore />}
							aria-controls='panel3bh-content'
							id='panel3bh-header'>
							<Typography>3. Hình thức giao hàng & xác nhận</Typography>
						</ExpansionPanelSummary>
						<ExpansionPanelDetails>
							<Typography>
								Nunc vitae orci ultricies, auctor nunc in, volutpat nisl.
								Integer sit amet egestas eros, vitae egestas augue. Duis vel est
								augue.
							</Typography>
						</ExpansionPanelDetails>
					</ExpansionPanel>
				</div>
				<div className='detail-panel'>
					<div className='row'>
						<div className='col-12'>
							<p className='row'>
								<span className='col-4'>Tạm tính:</span>
								<strong className='col-8'></strong>
							</p>
						</div>
						<div className='col-12'>
							<p className='row'>
								<span className='col-4'>Phí ship:</span>
								<strong className='col-8'></strong>
							</p>
							<hr />
						</div>

						<div className='col-12'>
							<p className='row'>
								<span className='col-4'>Thành tiền:</span>
								<strong className='col-8'></strong>
								<span className='col-4'></span>
								<small className='col-8'>(Đã bao gồm thuế nếu có)</small>
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Checkout;
