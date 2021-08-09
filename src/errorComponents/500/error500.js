import React from 'react';
import { Link } from 'react-router-dom'
import classes from '../error404.module.css';

const Error404 = (props) => {
	return (
		<div id={classes.notfound_container}>
			<div className={classes.notfound}>
				<div className={`${classes.notfound_404}`}>
					<h3>Oops! Something went wrong.</h3>
					<h1><span>5</span><span>0</span><span>0</span></h1>
				</div>
				<h2>we are sorry, please refresh the page.</h2>
				<Link to="/">Go Home</Link>
			</div>
		</div>
	)
}

export default Error404;