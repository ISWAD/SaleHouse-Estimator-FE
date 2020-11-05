import React from 'react';
import './MobNavButton.css';

const MobNavButton = ({ onMobNavButtonClick }) => {
	return(
		<div className ="ToggleDiv shadow-2" onClick = { onMobNavButtonClick }>
			<div className = "ToggleLine"></div>
			<div className = "ToggleLine"></div>
			<div className = "ToggleLine"></div>
		</div>
	)
}

export default MobNavButton;