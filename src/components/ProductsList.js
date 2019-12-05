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
		const { title, products } = this.props;
		return (
			<section className='featured-products row'>
				<h4
					className='col-md-10'
					style={{ fontWeight: 'bold', textTransform: 'capitalize' }}>
					{title}
				</h4>
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
						<option value=''>None</option>
						<option value={10}>Giá tiền giảm dần</option>
						<option value={20}>Giá tiền tăng dần</option>
					</NativeSelect>
				</FormControl>
				<br></br>
				<div className='productslist-container col-md-12'>{products}</div>
			</section>
		);
	}
}

export default ProductsList;
