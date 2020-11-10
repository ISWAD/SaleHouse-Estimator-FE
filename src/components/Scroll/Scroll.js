import React from 'react';
import './Scroll.css';

const Scroll = (props) => {
	return (
		<div style = {{ overflowY: "auto"}}>
			{props.children};
		</div>
	)
}

export default Scroll;