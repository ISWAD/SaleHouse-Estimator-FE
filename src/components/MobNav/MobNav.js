import React from 'react';
import { TransitionGroup, CSSTransition } from "react-transition-group";

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



        <TransitionGroup component={null}>
        {mobNavShow && (
          <CSSTransition classNames="togglemenu" timeout={500}>
  			  <div className = "mobNav shadow-2 f4">
            {navMenu.map((item) => {
              if (item === pageIn) {
                return <div className = "mobNavList" style = {{ color: 'yellow' }} onClick = { onNavClick }> 
                          {item} 
                       </div>;
          } else {
                return <div className = "mobNavList" onClick = { onNavClick }> {item} </div>;
          }
        }) }
    		  </div>
          </CSSTransition>
        )}
      </TransitionGroup>
		</div>
	)
}

export default MobNav;