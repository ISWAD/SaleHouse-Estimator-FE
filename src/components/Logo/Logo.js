import React from 'react';
import Tilt from 'react-tilt';
import logo from './logo.jpg';
import './Logo.css';

const Logo = () => {
	return(
		<div className='mt0 imgFrame'>
			<Tilt className="Tilt" options={{ max : 55 }} style={{ height: 125, width: 125 }} >
				<div className="Tilt-inner">
					<img alt='logo' src={logo}/>
				</div>
			</Tilt>
		</div>
	)
}

export default Logo;