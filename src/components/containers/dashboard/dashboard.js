import React from 'react';
import classes from './dashboard.module.css';

/* Header component */
import Header from '../../header/header';
import Sidebar from '../../sidebar/sidebar';
import SidebarPortal from '../../sidebar/sidebar_protal';

export default function Dashboard(props) {
	return (
		<>
			<Header />
			<SidebarPortal />
			<div className={classes.container}>
				<div className={classes.sidebar}>
					<Sidebar />
				</div>
				{
					props.children
				}
			</div>
		</>
	)
}