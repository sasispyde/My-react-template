import React from 'react';
import classes from './card.module.css';

export default function BasicCard(props) {
	return (
		<div className={classes.container}>
			<div>
				<img src={props.img} alt={props.alt} />
			</div>
			<div>
				{
					props.children
				}
			</div>
		</div>
	)
}