import React from 'react';

import './Welcome.css';

const Welcome = ({ onWlcomeBtnClick }) => {
	return(
		<div>
			<div className = "Welcome shadow-2">
				<h1 className = "f4">Welcome to Sale House Price Estimator Web App!</h1>
				<div>
					This is an intelligent web app, designed by ISWAD, to estimate the sale price of houses in U.S.A.
					ISWAD is made of analytical thinkers who are able to extract useful information from any kind of dataset to create 
					beautifully designed web/mobile applications and to find unique solutions helping clients improve their bussinesses.  
					Dealing with different challenges in various industrial sectors, we have profound understanding about different types 
					of dataset. We use our creativity to find the best solutions for your problems and we truthfully respect our clients.
					The freely available dataset on <a href = "https://www.kaggle.com/c/house-prices-advanced-regression-techniques/data">Kaggele</a> is used for the development of this app.
					We would be happy to hear your comments about our app; it will help us to improve our future applications.
					If you need any other infrormation about our work you can call us at +1(226)977-0855 or send us an email.
					<p>Hope you enjoy using our app!</p>
				</div>
			</div>
			<input
	        	className="b ph3 pv2 input-reset ba b--black bg-transparent pointer f5 dib btnScale shadow-2 hover-bg-purple SubmitBtn"
	          	type="submit"
	          	value="Go to the app"
	          	style = {{ color: "white", borderColor: "white", borderRadius: "10px", border: "solid 1px" }}
	          	onClick = { onWlcomeBtnClick } 
	        />
		</div>
	)
}

export default Welcome;