import React from 'react';
import classes from './dashboard.module.css';

/* Header component */
import Header from '../../header/header';
import Sidebar from '../../sidebar/sidebar';
import SidebarPortal from '../../sidebar/sidebar_protal';
// import Card from '../../utils/card/card';

import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);

export default function Dashboard(props) {

	document.getElementById('backdrop').addEventListener('click' , () => {
		document.body.classList.remove(`${classes.hide_scroll}`);	
		document.getElementById('sidebar_mobile').classList.remove(`show`);
		document.getElementById("backdrop").style.display = "none";
	})

	const handleSidebar = () => {
		document.body.classList.add(`${classes.hide_scroll}`);
		document.getElementById('sidebar_mobile').classList.add(`show`);
		document.getElementById("backdrop").style.display = "block";
	}

	const [ render, setRender ] = React.useState(false);

	const data = React.useMemo(() => {
		const labels = [
		  'January',
		  'February',
		  'March',
		  'April',
		  'May',
		  'June',
		];
		return {
	 		labels: labels,
		  	datasets: [
			{
				label: 'My First dataset',
				backgroundColor: 'rgb(255, 99, 132)',
				borderColor: 'rgb(255, 99, 132)',
				data: [0, 10, 5, 2, 20, 30, 45],
			},
			{
				label: 'My Second dataset',
				backgroundColor: 'rgb(255, 99, 121)',
				borderColor: 'rgb(255, 99, 125)',
				data: [10, 30, 25, 2, 20, 30, 65],
			}
		  ]
		}
	},[]);

	React.useEffect(() => {
		const config = {
		  type: 'line',
		  data,
		  options: {}
		};

		const config2 = {
		  type: 'bar',
		  data,
		  options: {}
		};

		let lineChart = new Chart(document.getElementById('lineChart'),config);
		let barChart = new Chart(document.getElementById('barChart'),config2);

		return () => {
	      lineChart.destroy()
	      barChart.destroy()
	    };
	},[data])
	
	return (
		<>
			<Header handleSidebar={handleSidebar} />
			<SidebarPortal />
			<button onClick={() => {setRender(!render)}}>{render.toString()}</button>
			<div className={classes.container}>
				<div className={classes.sidebar}>
					<Sidebar />
				</div>
				<div className={classes.charts_container}>
					<div>
						<h2>Line chart</h2>
						<div>
							<canvas id="lineChart"></canvas>
						</div>
					</div>
					<div>
						<h2>Bar chart</h2>
						<div>
							<canvas id="barChart"></canvas>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}