import React from 'react';
import MobNavButton from '../MobNavButton/MobNavButton.js';
import './MobNav.css'

const MobNav = () => {
	return(
		<div className="navFrame">
  			<MobNavButton />
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