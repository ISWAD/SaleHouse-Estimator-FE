import React , {Component} from 'react';

const re = /^(\d+)?(\.)?(\d+)?$/;
const re2 = /^[.]?(\d+)?$/;

let WoodDeckSFval = '';
let FullBathval = '';
let TotRmsAbvGrdval = '';
let SecondFlrSFval = '';

class FormsPg13 extends Component{
	
	constructor(props){
		super(props);
	}

	onWoodDeckSFChange = (event) => {
		if (re.test(event.target.value) || re2.test(event.target.value)) {
			WoodDeckSFval = event.target.value;
			this.props.setWoodDeckSFVal(WoodDeckSFval);
		} else {
			document.getElementById("WoodDeckSF").value = WoodDeckSFval;
		}
	}

	onFullBathChange = (event) => {
		if (re.test(event.target.value) || re2.test(event.target.value)) {
			FullBathval = event.target.value;
			this.props.setFullBathVal(FullBathval);
		} else {
			document.getElementById("FullBath").value = FullBathval;
		}
	}

	onTotRmsAbvGrdChange = (event) => {
		if (re.test(event.target.value) || re2.test(event.target.value)) {
			TotRmsAbvGrdval = event.target.value;
			this.props.setTotRmsAbvGrdVal(TotRmsAbvGrdval);
		} else {
			document.getElementById("TotRmsAbvGrd").value = TotRmsAbvGrdval;
		}
	}

	on2ndFlrSFChange = (event) => {
		if (re.test(event.target.value) || re2.test(event.target.value)) {
			SecondFlrSFval = event.target.value;
			this.props.set2ndFlrSFVal(SecondFlrSFval);
		} else {
			document.getElementById("2ndFlrSF").value = SecondFlrSFval;
		}
		let val = event.target.value;
		this.props.set2ndFlrSFVal(val);
	}

	render() {
		return(
			<div className = "FormContainer">
				<div className = "InputContainer">
					<label className = "db fw6 lh-copy f5" htmlFor = "WoodDeckSF"> Wood deck area in square feet [0-857] </label>
        			<input 
						type = "text" 
		          		name = "WoodDeckSF" 
		          		id = "WoodDeckSF" 
		          		className="pa2 input-reset ba bg-transparent hover-bg-purple hover-white w-100 shadow-2"
		          		style = {{ border: "solid 1px", borderRadius: "5px", borderColor: "white", color: "white", margin: "10px auto"}}
		          		placeholder="Enter a number"
		          		onChange = { this.onWoodDeckSFChange }
		          	/>
				</div>

				<div className = "InputContainer">
					<label className = "db fw6 lh-copy f5" htmlFor = "FullBath"> Full bathrooms above grade [0-3] </label>
        			<input 
						type = "text" 
		          		name = "FullBath" 
		          		id = "FullBath" 
		          		className="pa2 input-reset ba bg-transparent hover-bg-purple hover-white w-100 shadow-2"
		          		style = {{ border: "solid 1px", borderRadius: "5px", borderColor: "white", color: "white", margin: "10px auto"}}
		          		placeholder="Enter a number"
		          		onChange = { this.onFullBathChange }
		          	/>
				</div>

				<div className = "InputContainer">
					<label className = "db fw6 lh-copy f5" htmlFor = "TotRmsAbvGrd"> Total rooms above grade (does not include bathrooms) [2-14] </label>
        			<input 
						type = "text" 
		          		name = "TotRmsAbvGrd" 
		          		id = "TotRmsAbvGrd" 
		          		className="pa2 input-reset ba bg-transparent hover-bg-purple hover-white w-100 shadow-2"
		          		style = {{ border: "solid 1px", borderRadius: "5px", borderColor: "white", color: "white", margin: "10px auto"}}
		          		placeholder="Enter a number"
		          		onChange = { this.onTotRmsAbvGrdChange }
		          	/>
				</div>

				<div className = "InputContainer">
					<label className = "db fw6 lh-copy f5 TwoLines" htmlFor = "2ndFlrSF"> Second floor square feet [0-2065] </label>
        			<input 
						type = "text" 
		          		name = "2ndFlrSF" 
		          		id = "2ndFlrSF" 
		          		className="pa2 input-reset ba bg-transparent hover-bg-purple hover-white w-100 shadow-2"
		          		style = {{ border: "solid 1px", borderRadius: "5px", borderColor: "white", color: "white", margin: "10px auto"}}
		          		placeholder="Enter a number"
		          		onChange = { this.on2ndFlrSFChange }
		          	/>
				</div>
			</div>
		)
	}
}

export default FormsPg13;