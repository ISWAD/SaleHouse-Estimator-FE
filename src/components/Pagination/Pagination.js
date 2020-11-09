import React from 'react';
import './Pagination.css';

const Pagination = ({ estPageIn, onPaginationClick }) => {

    let estPagesArr = ["<<", "<", ">", ">>"];

	let estPages = [];

    if (estPageIn < 2) {
        for (let i = 1; i <= 4; i++){
            estPages.push(i);
        }
    } else if (estPageIn >= 10 && estPageIn < 13) {
        for (let i = estPageIn - 2; i <= estPageIn + 1; i++) {
            estPages.push(i);
        }
    } else if (estPageIn === 13) {
        for (let i = 10; i <= 13; i++) {
            estPages.push(i);
        }
    } else {
        for (let i = estPageIn - 1; i <= estPageIn + 2; i++){
            estPages.push(i);
        }
    }
	
	return (
		<div>
			<div>
        		<ul className = "pageNum">
            		{estPagesArr.map((num, idx) => {
            			return <li className = "shadow-2" onClick = {onPaginationClick}> { num } </li>
            		})}
            	</ul>
            </div>
            <div>
        		<ul className = "pageNum">
            		{estPages.map((num, idx) => {
                        if (num === estPageIn) {
            			     return <li style = {{color: "yellow"}} className = "shadow-2 pa2" onClick = {onPaginationClick}> { num } </li>
                        } else {
                            return <li className = "shadow-2 pa2" onClick = {onPaginationClick}> { num } </li>
                        }
            		})}
            	</ul>
            </div>
         </div>
	)
}

export default Pagination;