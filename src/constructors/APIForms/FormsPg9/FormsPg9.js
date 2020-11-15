import React , {Component} from 'react';

class FormsPg9 extends Component{
	
	constructor(props){
		super(props);
	}

	onBsmtUnfSFChange = (event) => {
		let val = event.target.value;
		this.props.setBsmtUnfSFVal(val);
	}

	onGarageCarsChange = (event) => {
		let val = event.target.value;
		this.props.setGarageCarsVal(val);
	}

	onBsmtFullBathChange = (event) => {
		let val = event.target.value;
		this.props.setBsmtFullBathVal(val);
	}

	onYearBuiltChange = (event) => {
		let val = event.target.value;
		this.props.setYearBuiltVal(val);
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
		          		onChange = { this.onBsmtUnfSFChange }
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
		          		onChange = { this.onGarageCarsChange }
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
		          		onChange = { this.onBsmtFullBathChange }
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
		          		onChange = { this.onYearBuiltChange }
		          	/>
				</div>
			</div>
		)
	}
}

export default FormsPg9;