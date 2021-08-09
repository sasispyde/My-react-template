import React from 'react';

/* Navigation */
import { Link } from 'react-router-dom';

/* CSS */
import classes from './header.module.css';

/* Image's */
import Avator from '../../assets/images/avator.png';
import Menu from '../../assets/images/menu.svg';

/* Get user information */
import userContext from '../../context/context';

const Header = (props) => {

	let userInfo = React.useContext(userContext);
	var image = Avator;

	/* if profile picture loading is failed then the page gets glitter */	 
	/*
		if(userInfo && userInfo.profile_picture !== undefined && userInfo.profile_picture !== "") {
			image = userInfo.profile_picture;
		}
	*/

	const [profileImage] = React.useState({image:image,error:false});

	/*
		const onError = (event) => {
			if(!profileImage.error) {
				setImage({
					"image" : Avator,
					"error" : true
				})
			}
		}
	*/

	const logout = () => {
		console.log(logout);
	}

	const handleSidebar = () => {

		var closeItems = document.querySelectorAll('.closeitems');
		closeItems.forEach(el => el.addEventListener('click', event => {
		  	document.body.classList.remove(`${classes.hide_scroll}`);	
			document.getElementById('sidebar_mobile').classList.remove(`show`);
			document.getElementById("backdrop").style.display = "none";
		}));

		document.body.classList.add(`${classes.hide_scroll}`);
		document.getElementById('sidebar_mobile').classList.add(`show`);
		document.getElementById("backdrop").style.display = "block";
	}

	return (
		<header className={classes.container}>
			<img onClick={handleSidebar} className={classes.open_sidebar} src={Menu} alt={"menu"} />
			<h2 className={classes.brand}>Logo's</h2>
			<div className={classes.profile_container}>
				<object data={profileImage.image}>
					<img className={classes.profile_picture } src={Avator} alt="profile_picture" />
			    </object>
				<div className={classes.profile_menu}>
					<Link to="/">Welcome {userInfo.user_name ?? "Guest"}</Link>
					<Link to="/edit_profile">Edit profile</Link>
					<Link to="/change_password">Change Password</Link>
					<Link to="/dashboard">Dashboard</Link>
					<button onClick={logout}>Logout</button>
				</div>
			</div>
		</header>
	)
}

export default React.memo(Header);