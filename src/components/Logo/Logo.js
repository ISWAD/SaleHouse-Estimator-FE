import React from 'react';
import Tilt from 'react-tilt';
import logo from './Logo.png';
import './Logo.css';

const Logo = () => {
	return(
		<Tilt className="Tilt" options={{ max : 55 }} style={{ height: 125, width: 125 }} >
		<div className='mt0 imgFrame shadow-2'>
				<div className="Tilt-inner">
					<img alt='logo' src={logo}/>
				</div>
		</div>
		</Tilt>
	)
}

export default Logo;