import React from 'react';
import classes from './sidebar.module.css';

/* Close icon */
import Close from '../../assets/images/close.svg';
import Linkicon from '../../assets/images/link.svg';

import { Link } from 'react-router-dom';

const Sidebar = () => {
	return (
		<div>
			<div className={`${classes.sidebar_header}`}>
				<img className={`${'closeitems'} ${classes.close_icon}`} src={Close} alt={"close"} />
			</div>
			<div className={classes.link_container}>
				<h3>Chart's</h3>
				<hr className={classes.under_line} />
				<ul>
					<li>
						<img src={Linkicon} alt={"link"} />
						<Link to="/charts">Basic Chart</Link>
					</li>
					<li>
						<img src={Linkicon} alt={"link"} />
						<Link to="/charts">Radar Chart</Link>
					</li>
					<li>
						<img src={Linkicon} alt={"link"} />
						<Link to="/charts">Multiple Chart</Link>
					</li>
				</ul>
			</div>
			<div className={classes.link_container}>
				<h3>Card's</h3>
				<hr className={classes.under_line} />
				<ul>
					<li>
						<img src={Linkicon} alt={"link"} />
						<Link to="/cards">Card's</Link>
					</li>
				</ul>
			</div>
			<div className={classes.link_container}>
				<h3>Error Page's</h3>
				<hr className={classes.under_line} />
				<ul>
					<li>
						<img src={Linkicon} alt={"link"} />
						<Link to="/error404">Error 404</Link>
					</li>
					<li>
						<img src={Linkicon} alt={"link"} />
						<Link to="/error500">Error 500</Link>
					</li>
					<li>
						<img src={Linkicon} alt={"link"} />
						<Link to="/error401">Error 401</Link>
					</li>
				</ul>
			</div>
			<div className={classes.link_container}>
				<h3>Table's</h3>
				<hr className={classes.under_line} />
				<ul>
					<li>
						<img src={Linkicon} alt={"link"} />
						<Link to="/table">Table</Link>
					</li>
				</ul>
			</div>
		</div>
	)
}

export default React.memo(Sidebar)