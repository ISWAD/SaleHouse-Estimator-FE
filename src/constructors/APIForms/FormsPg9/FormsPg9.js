import React , {Component} from 'react';

const re = /^(\d+)?(\.)?(\d+)?$/;
const re2 = /^[.]?(\d+)?$/;

let BsmtUnfSFval = '';
let GarageCarsval = '';
let BsmtFullBathval = '';
let YearBuiltval = '';

class FormsPg9 extends Component{
	
	constructor(props){
		super(props);
	}

	onBsmtUnfSFChange = (event) => {
		if (re.test(event.target.value) || re2.test(event.target.value)) {
			BsmtUnfSFval = event.target.value;
			this.props.setBsmtUnfSFVal(BsmtUnfSFval);
		} else {
			document.getElementById("BsmtUnfSF").value = BsmtUnfSFval;
		}
	}

	onGarageCarsChange = (event) => {
		if (re.test(event.target.value) || re2.test(event.target.value)) {
			GarageCarsval = event.target.value;
			this.props.setGarageCarsVal(GarageCarsval);
		} else {
			document.getElementById("GarageCars").value = GarageCarsval;
		}
	}

	onBsmtFullBathChange = (event) => {
		if (re.test(event.target.value) || re2.test(event.target.value)) {
			BsmtFullBathval = event.target.value;
			this.props.setBsmtFullBathVal(BsmtFullBathval);
		} else {
			document.getElementById("BsmtFullBath").value = BsmtFullBathval;
		}
	}

	onYearBuiltChange = (event) => {
		if (re.test(event.target.value) || re2.test(event.target.value)) {
			YearBuiltval = event.target.value;
			this.props.setYearBuiltVal(YearBuiltval);
		} else {
			document.getElementById("YearBuilt").value = YearBuiltval;
		}
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
		          		placeholder="Just enter a valid number, like 12.34"
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
		          		placeholder="Just enter a valid number, like 12.34"
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
		          		placeholder="Just enter a valid number, like 12.34"
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
		          		placeholder="Just enter a valid number, like 12.34"
		          		onChange = { this.onYearBuiltChange }
		          	/>
				</div>
			</div>
		)
	}
}

export default FormsPg9;