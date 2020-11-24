import React from 'react';
import Tilt from 'react-tilt';
import logo from './Logo.png';
import text from './Type2.png';
import './Logo.css';

const Logo = () => {
	return(
		<Tilt className="Tilt" options={{ max : 55 }} style={{ height: 150, width: 150 }} >
		<div className='mt0 imgFrame'>
				<div className="Tilt-inner">
					<img alt='logo' className = "Logo" src={logo}/>
					<img alt='logo' className = "Type" src={text}/>
				</div>
		</div>
		</Tilt>
	)
}

export default Logo;