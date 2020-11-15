import React , {Component} from 'react';

class FormsPg13 extends Component{
	
	constructor(props){
		super(props);
	}

	onWoodDeckSFChange = (event) => {
		let val = event.target.value;
		this.props.setWoodDeckSFVal(val);
	}

	onFullBathChange = (event) => {
		let val = event.target.value;
		this.props.setFullBathVal(val);
	}

	onTotRmsAbvGrdChange = (event) => {
		let val = event.target.value;
		this.props.setTotRmsAbvGrdVal(val);
	}

	on2ndFlrSFChange = (event) => {
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
		          		onChange = { this.on2ndFlrSFChange }
		          	/>
				</div>
			</div>
		)
	}
}

export default FormsPg13;