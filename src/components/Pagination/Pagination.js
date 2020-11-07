import React from 'react';
import './Pagination.css';

const Pagination = () => {

	let estPagesArr = ["<<", "<", ">", ">>"]
	let estPages = [];

	for (let i = 1; i <= 4; i++){
  		estPages.push(i);
	}
	
	return (
		<div>
			<div>
        		<ul className = "pageNum">
            		{estPages.map((num, idx) => {
            			return <li className = "shadow-2"> { num } </li>
            		})}
            	</ul>
            </div>
            <div>
        		<ul className = "pageNum">
            		{estPagesArr.map((num, idx) => {
            			return <li className = "shadow-2 pa2"> { num } </li>
            		})}
            	</ul>
            </div>
         </div>
	)
}

export default Pagination;