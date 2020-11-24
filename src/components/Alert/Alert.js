import React from 'react';
import './Alert.css';

const Alert = ({ alertMsg }) => {
	return <h1  className = "f5 Alert pa3 shadow-2 Alert" dangerouslySetInnerHTML={{__html: alertMsg}} />
}

export default Alert;