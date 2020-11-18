import React from 'react';

import './Welcome.css';

const Welcome = ({ onWlcomeBtnClick }) => {
	return(
		<div>
			<div className = "Welcome shadow-2">
				<h1 className = "f4">Welcome!</h1>
				<div>
					This is an intelligent web app, designed by <span>ISWAD</span> to estimate the sale price of houses in U.S.A.
					The freely available dataset on <a href = "https://www.kaggle.com/c/house-prices-advanced-regression-techniques/data">Kaggele</a> is used to train the estimator model.
					
					If you need any other infrormation about our services you can call us at +1(226)977-0855 or send us an email.
					<p>Enjoy!</p>
				</div>
			</div>
			<input
	        	className="b ph3 pv2 input-reset ba b--black bg-transparent pointer f5 dib btnScale shadow-2 hover-bg-purple SubmitBtn"
	          	type="submit"
	          	value="Go to the app"
	          	style = {{ color: "white", borderColor: "white", borderRadius: "10px", border: "solid 1px", width: "60%"}}
	          	onClick = { onWlcomeBtnClick } 
	        />
		</div>
	)
}

export default Welcome;