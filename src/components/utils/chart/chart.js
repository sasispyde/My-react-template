import React from 'react';

/* Chart.js */
import Chart from 'chart.js/auto';

const LineChart = ({id,...props}) => {

	React.useEffect(() => {

		let config = {
			data : props.data,
			type : props.type,
			options : props.options
		}
		let chart = new Chart(document.getElementById(id),config);
		if(props.type === "pie") {
			console.log(chart);
		}

		return () => {
	      chart.destroy();
	    };
	},[props.data,id,props.type,props.options])

	return (
		<div>
			<h2>{props.heading}</h2>
			<div>
				<canvas id={id}></canvas>
			</div>
		</div>
	)
}

export default React.memo(LineChart);