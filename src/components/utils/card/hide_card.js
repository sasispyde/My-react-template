import React from 'react';
import classes from './card.module.css';

export default function HideContent(props) {

	const showHideContent = (event) => {
		const element = event.target.nextSibling;
		const classExists = element.classList.toggle(`${classes.show}`);
		if(classExists) {
			event.target.innerHTML = "Hide ";
		} else {
			event.target.innerHTML = "Show more";
		}
	}

	return (
		<div className={classes.hide_container}>
			<div className={classes.image_container}>
				<img src={props.img} alt={props.alt} />
			</div>
			<div className={classes.content_container}>
				{
					props?.children?.props?.children?.length > 50 &&
						<button className={classes.showhide_button} onClick={showHideContent}>Show more</button>
				}
				<div className={classes.content}>
					{
						props.children
					}
				</div>
			</div>
		</div>
	)
}