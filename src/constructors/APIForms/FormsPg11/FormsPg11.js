import React , {Component} from 'react';

const re = /^(\d+)?(\.)?(\d+)?$/;
const re2 = /^[.]?(\d+)?$/;

let Fireplacesval = '';
let LotFrontageval = '';
let BsmtFinSF1val = '';
let YearRemodAddval = '';

class FormsPg11 extends Component{
	
	constructor(props){
		super(props);
	}

	onFireplacesChange = (event) => {
		if (re.test(event.target.value) || re2.test(event.target.value)) {
			Fireplacesval = event.target.value;
			this.props.setFireplacesVal(Fireplacesval);
		} else {
			document.getElementById("Fireplaces").value = Fireplacesval;
		}
	}

	onLotFrontageChange = (event) => {
		if (re.test(event.target.value) || re2.test(event.target.value)) {
			LotFrontageval = event.target.value;
			this.props.setLotFrontageVal(LotFrontageval);
		} else {
			document.getElementById("LotFrontage").value = LotFrontageval;
		}
	}

	onBsmtFinSF1Change = (event) => {
		if (re.test(event.target.value) || re2.test(event.target.value)) {
			BsmtFinSF1val = event.target.value;
			this.props.setBsmtFinSF1Val(BsmtFinSF1val);
		} else {
			document.getElementById("BsmtFinSF1").value = BsmtFinSF1val;
		}
	}

	onYearRemodAddChange = (event) => {
		if (re.test(event.target.value) || re2.test(event.target.value)) {
			YearRemodAddval = event.target.value;
			this.props.setYearRemodAddVal(YearRemodAddval);
		} else {
			document.getElementById("YearRemodAdd").value = YearRemodAddval;
		}
	}

	render() {
		return(
			<div className = "FormContainer">
				<div className = "InputContainer">
					<label className = "db fw6 lh-copy f5" htmlFor = "Fireplaces"> Number of fireplaces [0-3] </label>
        			<input 
						type = "text" 
		          		name = "Fireplaces" 
		          		id = "Fireplaces" 
		          		className="pa2 input-reset ba bg-transparent hover-bg-purple hover-white w-100 shadow-2"
		          		style = {{ border: "solid 1px", borderRadius: "5px", borderColor: "white", color: "white", margin: "10px auto"}}
		          		placeholder="Enter a number"
		          		onChange = { this.onFireplacesChange }
		          	/>
				</div>

				<div className = "InputContainer">
					<label className = "db fw6 lh-copy f5" htmlFor = "LotFrontage"> Linear feet of street connected to property [0-313] </label>
        			<input 
						type = "text" 
		          		name = "LotFrontage" 
		          		id = "LotFrontage" 
		          		className="pa2 input-reset ba bg-transparent hover-bg-purple hover-white w-100 shadow-2"
		          		style = {{ border: "solid 1px", borderRadius: "5px", borderColor: "white", color: "white", margin: "10px auto"}}
		          		placeholder="Enter a number"
		          		onChange = { this.onLotFrontageChange }
		          	/>
				</div>

				<div className = "InputContainer">
					<label className = "db fw6 lh-copy f5 TwoLines" htmlFor = "BsmtFinSF1"> Type 1 finished square feet [0-5644] </label>
        			<input 
						type = "text" 
		          		name = "BsmtFinSF1" 
		          		id = "BsmtFinSF1" 
		          		className="pa2 input-reset ba bg-transparent hover-bg-purple hover-white w-100 shadow-2"
		          		style = {{ border: "solid 1px", borderRadius: "5px", borderColor: "white", color: "white", margin: "10px auto"}}
		          		placeholder="Enter a number"
		          		onChange = { this.onBsmtFinSF1Change }
		          	/>
				</div>

				<div className = "InputContainer">
					<label className = "db fw6 lh-copy f5" htmlFor = "YearRemodAdd"> Remodel date (same as construction date if no remodeling or additions) [1950-2010] </label>
        			<input 
						type = "text" 
		          		name = "YearRemodAdd" 
		          		id = "YearRemodAdd" 
		          		className="pa2 input-reset ba bg-transparent hover-bg-purple hover-white w-100 shadow-2"
		          		style = {{ border: "solid 1px", borderRadius: "5px", borderColor: "white", color: "white", margin: "10px auto"}}
		          		placeholder="Enter a number"
		          		onChange = { this.onYearRemodAddChange }
		          	/>
				</div>
			</div>
		)
	}
}

export default FormsPg11;