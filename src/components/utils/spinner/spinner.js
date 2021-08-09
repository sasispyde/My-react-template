import './spinner.css';

const Spinner = (props) => {
	return(
		<div className="load">
		  <div className = "spinner" style = {{"fontSize" : "18px"}}>
		  	<div className = "head"></div>
		  </div>  
		</div>
	)
}

export default Spinner;