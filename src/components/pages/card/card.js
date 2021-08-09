import React from 'react';
import classes from './card.module.css';

/* Images */
import Card1 from '../../../assets/images/card1.jpg';
import Card3 from '../../../assets/images/card3.jpg';


/* Basic card */
import BasicCard from '../../utils/card/basic_card';
import HideCard from '../../utils/card/hide_card';
import MenuCard from '../../utils/card/card_with_menu';

export default function Card() {

	return (
		<div className={classes.card_container}>
			<h2>Basic card</h2>
			<div className={classes.basic_card}>
				<BasicCard img={Card1} alt={"Card1"}>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
						tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
						quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
						consequat.
					</p>
				</BasicCard>
				<BasicCard img={Card3} alt={"Card3"}>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
						tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
						quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
						consequat.
					</p>
				</BasicCard>
				<BasicCard img={Card1} alt={"Card1"}>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
						tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
						quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
						consequat.
					</p>
				</BasicCard>
			</div>
			<h2>Hide content</h2>
			<div className={classes.hide_content}>
				<HideCard img={Card1} alt="card1">
					<p>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
						tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
						quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
						consequat.Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
						tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
						quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
						consequat.Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
						tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
						quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
						consequat.
					</p>
				</HideCard>
				<HideCard img={Card3} alt="card3">
					<p>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
						tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
						quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
						consequat.Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
						tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
						quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
						consequat.
					</p>
				</HideCard>
				<HideCard img={Card1} alt="card1">
					<p>
						Lorem ipsum dolor sit amet
					</p>
				</HideCard>
			</div>
			<h2>With menu</h2>
			<div className={classes.with_menu}>
				<MenuCard img={Card3} alt="card2">
					<p className={classes.content_menu_card}>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
						tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
						quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
						consequat.
					</p>
				</MenuCard>

				<MenuCard img={Card1} alt="card1">
					<p className={classes.content_menu_card}>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
						tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
						quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
						consequat.
					</p>
				</MenuCard>

				<MenuCard img={Card3} alt="card3">
					<p className={classes.content_menu_card}>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
						tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
						quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
						consequat.
					</p>
				</MenuCard>
			</div>
		</div>
	)
}