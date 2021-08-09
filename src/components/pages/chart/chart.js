import React from 'react';
import classes from './chart.module.css';

/* Charts */
import ReactChart from '../../utils/chart/reactChart';

export default function Chart(props) {

	const rand = () => Math.round(Math.random() * 20 - 10);

	/* LINE AND BAR CHART */
	const [ data ] = React.useState({
	  labels: ['January','February','March','April','May','June',"July"],
	  datasets: [
		{
			label: 'Week 1',
			backgroundColor: 'rgb(255, 99, 132)',
			borderColor: 'rgb(255, 99, 132)',
			data: [90, 10, 5, 2, 20, 30, 45],
		},
		{
			label: 'Week 2',
			backgroundColor: 'rgb(100, 99, 121)',
			borderColor: 'rgb(100, 99, 125)',
			data: [10, 33, 25, 2, 20, 30, 65],
		}
	  ]
	});

	/* PIE CHART */
	const [pieChart] = React.useState({
		labels: [
			'Red',
			'Blue',
			'Yellow'
		],
		datasets: [{
			label: 'My First Dataset',
			data: [300, 50, 100],
			backgroundColor: [
			  'rgb(255, 99, 132)',
			  'rgb(54, 162, 235)',
			  'rgb(255, 205, 86)'
			],
			hoverOffset: 6,
			borderAlign: "inner"
		}]
	});

	/* RADAR CHART */
	const [radarChart] = React.useState({
		  labels: [
		    'Eating',
		    'Drinking',
		    'Sleeping',
		    'Designing',
		    'Coding',
		    'Cycling',
		    'Running'
		  ],
		  datasets: [{
		    label: 'My First Dataset',
		    data: [65, 59, 90, 81, 56, 55, 40],
		    fill: true,
		    backgroundColor: 'rgba(255, 99, 132, 0.2)',
		    borderColor: 'rgb(255, 99, 132)',
		    pointBackgroundColor: 'rgb(255, 99, 132)',
		    pointBorderColor: '#fff',
		    pointHoverBackgroundColor: '#fff',
		    pointHoverBorderColor: 'rgb(255, 99, 132)'
		  }, {
		    label: 'My Second Dataset',
		    data: [28, 48, 40, 19, 96, 27, 100],
		    fill: true,
		    backgroundColor: 'rgba(54, 162, 235, 0.2)',
		    borderColor: 'rgb(54, 162, 235)',
		    pointBackgroundColor: 'rgb(54, 162, 235)',
		    pointBorderColor: '#fff',
		    pointHoverBackgroundColor: '#fff',
		    pointHoverBorderColor: 'rgb(54, 162, 235)'
		  }]
	})

	/* BUBBLE CHART */
	const [bubbleChart] = React.useState({
	  datasets: [{
	    label: 'First Dataset',
	    data: [{
	      x: 20,
	      y: 30,
	      r: 5
	    }, {
	      x: 40,
	      y: 10,
	      r: 5
	    },
	    {
	      x: 22,
	      y: 14,
	      r: 5
	    }],
	    backgroundColor: 'rgb(255, 99, 132)'
	  }]
	})

	/* FOR MULTIPLE CHARTS */
	const [multipleChart] = React.useState({
	  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
	  datasets: [
	    {
	      type: 'line',
	      label: 'Dataset 1',
	      borderColor: 'rgb(54, 162, 235)',
	      borderWidth: 2,
	      fill: false,
	      data: [rand(), rand(), rand(), rand(), rand(), rand()],
	    },
	    {
	      type: 'bar',
	      label: 'Dataset 2',
	      backgroundColor: 'rgb(255, 99, 132)',
	      data: [rand(), rand(), rand(), rand(), rand(), rand(), rand()],
	      borderColor: 'white',
	      borderWidth: 2,
	    },
	    {
	      type: 'bar',
	      label: 'Dataset 3',
	      backgroundColor: 'rgb(75, 192, 192)',
	      data: [rand(), rand(), rand(), rand(), rand(), rand(), rand()],
	    },
	  ],
	})

	return (
		<div className={classes.charts_container}>
			<ReactChart options={{}} data={pieChart} id={"piechart"} heading={"Pie chart"} type="pie" />
			<ReactChart options={{}} data={pieChart} id={"doughnutchart"} heading={"Doughnut chart"} type="doughnut" />
			<ReactChart options={{}} data={radarChart} id={"radarchart"} heading={"Radar chart"} type="radar" />
			<ReactChart options={{}} data={data} id={"linechart"} heading={"Line chart"} type="line" />
			<ReactChart options={{}} data={data} id={"barchart"} heading={"Bar chart"} type="bar" />
			<ReactChart options={{}} data={bubbleChart} id={"bubblechart"} heading={"Bubble chart"} type="bubble" />
			<ReactChart options={{}} data={bubbleChart} id={"scatterchart"} heading={"Scattered chart"} type="scatter" />
			<ReactChart options={{}} data={data} id={"polarchart"} heading={"Polar chart"} type="polar" />
			<ReactChart options={{}} data={multipleChart} id={"multiplechart"} heading={"Multiple chart"} type="bubble" />
		</div>	
	)
}