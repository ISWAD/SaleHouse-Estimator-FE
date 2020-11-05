import React from 'react';
import './Nav.css'

let navMenu;

const Nav = ({ user_loggedIn, pageIn, onNavClick }) => {

	if (user_loggedIn) {
		navMenu = ["Estimator", "My Account", "Logout"];
	} else {
		navMenu = ["Estimator", "Register", "Login"];
	}

	return(
		<nav>
			<ul className = "f4 ma0 pa0 shadow-2 deskNav">
				{navMenu.map((item) => {
					if (item === pageIn.trim()) {
						return <li style = {{ color: 'yellow' }} className = "deskNavList" onClick = {onNavClick}> {item} </li>;
					} else {
						return <li className = "deskNavList" onClick = {onNavClick}> {item} </li>;
					}
				}) }
			</ul>
		</nav>
	)
}

export default Nav;