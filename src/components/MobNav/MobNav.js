import React from 'react';
import MobNavButton from '../MobNavButton/MobNavButton.js';
import './MobNav.css'

let navMenu;

const MobNav = ({ user_loggedIn, pageIn, mobNavShow, onNavClick, onMobNavButtonClick }) => {

  if (user_loggedIn) {
    navMenu = ["Estimator", "My Account", "Logout"];
  } else {
    navMenu = ["Estimator", "Register", "Login"];
  }

	return(
		<div className="navFrame">
  			<MobNavButton onMobNavButtonClick = { onMobNavButtonClick }/>
        {mobNavShow &&
  			  <div className = "mobNav shadow-2 f4">
            {navMenu.map((item) => {
              if (item === pageIn.trim()) {
                return <div className = "mobNavList" style = {{ color: 'yellow' }} onClick = { onNavClick }> 
                          {item} 
                       </div>;
          } else {
                return <div className = "mobNavList" onClick = { onNavClick }> {item} </div>;
          }
        }) }
    		  </div>
        }
		</div>
	)
}

export default MobNav;