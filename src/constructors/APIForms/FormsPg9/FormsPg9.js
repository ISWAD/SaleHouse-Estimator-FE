import React , {Component} from 'react';

class FormsPg9 extends Component{
	
	constructor(){
		super();
	}

	render() {
		return(
			<div className = "FormContainer">
				<div className = "InputContainer">
					<label className = "db fw6 lh-copy f5" htmlFor = "BsmtUnfSF"> Unfinished square feet of basement area [0-2336] </label>
        			<input 
						type = "text" 
		          		name = "BsmtUnfSF" 
		          		id = "BsmtUnfSF" 
		          		className="pa2 input-reset ba bg-transparent hover-bg-purple hover-white w-100 shadow-2"
		          		style = {{ border: "solid 1px", borderRadius: "5px", borderColor: "white", color: "white", margin: "10px auto"}}
		          	/>
				</div>

				<div className = "InputContainer">
					<label className = "db fw6 lh-copy f5" htmlFor = "GarageCars"> Size of garage in car capacity [0-4] </label>
        			<input 
						type = "text" 
		          		name = "GarageCars" 
		          		id = "GarageCars" 
		          		className="pa2 input-reset ba bg-transparent hover-bg-purple hover-white w-100 shadow-2"
		          		style = {{ border: "solid 1px", borderRadius: "5px", borderColor: "white", color: "white", margin: "10px auto"}}
		          	/>
				</div>

				<div className = "InputContainer">
					<label className = "db fw6 lh-copy f5" htmlFor = "BsmtFullBath"> Basement full bathrooms [0-3] </label>
        			<input 
						type = "text" 
		          		name = "BsmtFullBath" 
		          		id = "BsmtFullBath" 
		          		className="pa2 input-reset ba bg-transparent hover-bg-purple hover-white w-100 shadow-2"
		          		style = {{ border: "solid 1px", borderRadius: "5px", borderColor: "white", color: "white", margin: "10px auto"}}
		          	/>
				</div>

				<div className = "InputContainer">
					<label className = "db fw6 lh-copy f5" htmlFor = "YearBuilt"> Original construction date [1872-2010] </label>
        			<input 
						type = "text" 
		          		name = "YearBuilt" 
		          		id = "YearBuilt" 
		          		className="pa2 input-reset ba bg-transparent hover-bg-purple hover-white w-100 shadow-2"
		          		style = {{ border: "solid 1px", borderRadius: "5px", borderColor: "white", color: "white", margin: "10px auto"}}
		          	/>
				</div>
			</div>
		)
	}
}

export default FormsPg9;