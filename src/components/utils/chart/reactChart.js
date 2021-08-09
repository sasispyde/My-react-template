import React from 'react';
import { Bar,Doughnut,Radar,Line,Bubble,Scatter,PolarArea,Pie } from 'react-chartjs-2';

const WIDTH = 500;
const HEIGHT = 250;

const ReactChart = (props) => {

	let options = {...props.options} ?? {};
	options["responsive"] = true;
	options["maintainAspectRatio"] = false;
	/* 
		options["animation"] = { duration: 0 };
	    options["hover"] = { animationDuration: 0 };
    */

	const getChart = (type) => {
		switch(type) {
			case "pie": {
				// const { Pie } = require('react-chartjs-2');
				return <Pie options={options} height={HEIGHT} width={WIDTH} data={props.data} id={props.id} />
			}
			case "doughnut": {
				// const { Doughnut } = require('react-chartjs-2');
				return <Doughnut options={options} height={HEIGHT} width={WIDTH} data={props.data} id={props.id} />
			}
			case "radar" : {
				// const { Radar } = require('react-chartjs-2');
				return <Radar options={options} height={HEIGHT} width={WIDTH} data={props.data} id={props.id} />
			}
			case "line" : {
				// const { Line } = require('react-chartjs-2');
				return <Line options={options} height={HEIGHT} width={WIDTH} data={props.data} id={props.id} />	
			}
			case "bubble" : {
				// const { Bubble } = require('react-chartjs-2');
				return <Bubble options={options} height={HEIGHT} width={WIDTH} data={props.data} id={props.id} />	
			}
			case "bar" : {
				// const { Bar } = require('react-chartjs-2');
				return <Bar options={options} height={HEIGHT} width={WIDTH} data={props.data} id={props.id} />	
			}
			case "polar" : {
				// const { PolarArea } = require('react-chartjs-2');
				return <PolarArea options={options} height={HEIGHT} width={WIDTH} data={props.data} id={props.id} />
			}
			case "scatter" : {
				// const { Scatter } = require('react-chartjs-2');
				return <Scatter options={options} height={HEIGHT} width={WIDTH} data={props.data} id={props.id} />
			}
			default : {
				return null;
			}
		}
	}

	return (
		<div>
			<h2>{props.heading}</h2>
			<div>
				{
					getChart(props.type)
				}
			</div>
		</div>
	)
}

export default React.memo(ReactChart);