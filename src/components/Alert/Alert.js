import React from 'react';
import './Alert.css';

const Alert = ({ alertMsg }) => {
	return (
		alertMsg.map((msg, idx) => {
			return <h1  className = "f5 Alert pa3 shadow-2 Alert" key = { idx }> { msg } </h1>
		})
	)
}

export default Alert;