import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

class FetchZip extends Component 
{
	constructor(props) 
	{
	
	super(props);
	this.state = 
	{
		data: [],
	}
		this.handleChange = this.handleChange.bind(this)
	}


	async handleChange(event)
	{
		this.fetchZipData(event.target.value)
	}


	componentDidMount() {
		this.fetchZipData();
	}

	async fetchZipData(zip)
	{
		try 
		{
			let { data }  = await axios.get("http://ctp-zip-api.herokuapp.com/zip/" + zip);
			this.setState({data});
		}
		catch(err)
		{
			console.log(err);
		}
	}

	render()
	{	
		const dataObj = this.state.data;
		const list = dataObj.map((dataObj) =>
			<li>{dataObj.City + "\n"} State: {dataObj.State + "\n"} Location: ({dataObj.Lat + ","  + dataObj.Long +")\n"} 
			 Population: {dataObj.EstimatedPopulation + "\n"} Total Wages: {dataObj.TotalWages}</li>
			);
		return(
			<div>
			Zip Code:
			<input type="text" placeholder="Try 10016" onChange={this.handleChange}/>
			<ul>
				{list}
			</ul>
			</div>
			)
	}
}


FetchZip.propTypes =
{
	stateName: PropTypes.string,
	lat: PropTypes.string,
	long: PropTypes.string,
	population: PropTypes.string,
	totalWages: PropTypes.string
}

export default FetchZip;
