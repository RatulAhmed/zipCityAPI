import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

class City extends Component
{
	constructor(props)
	{
		super(props);
		this.state = 
		{
			zipCodes : []
		}
		this.handleChange = this.handleChange.bind(this);
	}

	async handleChange(event)
	{
		let city = event.target.value.toUpperCase();
		this.fetchCity(city)
	}

	componentDidMount()
	{
		this.fetchCity();
	}	

	async fetchCity(city)
	{
		try
		{
			let { data } = await axios.get("http://ctp-zip-api.herokuapp.com/city/" + city);
			this.setState({zipCodes: data});
			this.state.zipCodes.forEach(function(elements)
			{
				console.log(elements);
			}
			)
		}
		catch(err)
		{
			console.log(err);
		}
	}

	render()
	{
		const list = this.state.zipCodes.map((item,index) =>
			<li>{item}</li>
			);

		return (
			<div>
			City Name:
			<input type="text" placeholder="Try SPRINGFIELD" onChange={this.handleChange}/>
			<ul>
			{list}
			</ul>
			</div>
			)
	}

}


export default City;
