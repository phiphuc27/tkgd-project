import React, { Component } from 'react';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import NativeSelect from '@material-ui/core/NativeSelect';

class ProductsList extends Component {
	constructor(props) {
		super(props);
		this.state = {
			sort: ''
		};
	}

	handleChangeSelect = event => {
		this.setState({
			sort: event.target.value
		});
	};
	render() {
		const { products } = this.props;
		return (
			<section className='row'>
				<div className='col-md-10'></div>
				<FormControl
					style={{
						marginBottom: '10px',
						paddingRight: '18px',
						marginTop: '0px'
					}}
					className='col-md-2'>
					<InputLabel shrink htmlFor='sort-native-label-placeholder'>
						Sắp xếp
					</InputLabel>
					<NativeSelect
						value={this.state.sort}
						onChange={event => this.handleChangeSelect(event)}
						inputProps={{
							name: 'Sắp xếp',
							id: 'sort-native-label-placeholder'
						}}>
						<option value=''>Sản phẩm nổi bật</option>
						<option value={1}>Giá tiền giảm dần</option>
						<option value={2}>Giá tiền tăng dần</option>
						<option value={3}>Tên từ A-Z</option>
						<option value={4}>Tên từ Z-A</option>
						<option value={6}>Mới nhất</option>
						<option value={7}>Bán chạy nhất</option>
					</NativeSelect>
				</FormControl>
				<br></br>
				<div className='products-list-container'>{products}</div>
			</section>
		);
	}
}

export default ProductsList;
