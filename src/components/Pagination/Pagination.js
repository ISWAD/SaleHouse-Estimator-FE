import React from 'react';
import './Pagination.css';

const Pagination = ({ estPageIn, onPaginationClick }) => {

    let estPagesArr = ["<<", "<", ">", ">>"];
	
	return (
		<div>
			<div>
        		<ul className = "pageNum">
            		{estPagesArr.map((arr) => {
            			return <li className = "shadow-2" key = {arr.toString()} onClick = {onPaginationClick}> { arr } </li>
            		})}
            	</ul>
            </div>
            <div style = {{marginTop: '30px'}}>Page <span style = {{color: 'yellow'}}>{estPageIn}</span> of 26</div>
         </div>
	)
}

export default Pagination;