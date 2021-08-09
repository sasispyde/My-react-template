import React from 'react';
import classes from './card.module.css';

/* Icons */
import Dots from '../../../assets/images/dots.svg';

export default function CardWithMenu(props) {
	return (
		<div className={classes.container_menu}>
			<div className={classes.menu_container}>
				<img className={classes.card_image} src={props.img} alt={props.alt} />
				<section className={classes.menu}>
					<img title={"Menu"} className={classes.menu_icon} src={Dots} alt="Dots" />
					<div className={classes.menu_items}>
						<ul>
							<li>Menu 1</li>
							<li>Menu 2</li>
							<li>Menu 3</li>
						</ul>
					</div>
				</section>
			</div>
			<div>
				{
					props.children
				}
			</div>
		</div>
	)
}