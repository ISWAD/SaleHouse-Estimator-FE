import React from 'react';
import './MobNav.css'

const MobNav = () => {
	return(
		<div className="navFrame">
  			<nav className="navbar navbar-dark mobNavFrame">
    			<button className="navbar-toggler">
      				<span className="navbar-toggler-icon"></span>
    			</button>
  			</nav>
  			<div className = "mobNav shadow-2">
    			<div className = "mobNavList">Mohammad</div>
    			<div className = "mobNavList">Ali</div>
    			<div className = "mobNavList">Mohammad</div>
    			<div className = "mobNavList">Mohammad</div>
    		</div>
		</div>
	)
}

export default MobNav