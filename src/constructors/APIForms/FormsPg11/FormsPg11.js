import React , {Component} from 'react';

class FormsPg11 extends Component{
	
	constructor(props){
		super(props);
	}

	onFireplacesChange = (event) => {
		let val = event.target.value;
		this.props.setFireplacesVal(val);
	}

	onLotFrontageChange = (event) => {
		let val = event.target.value;
		this.props.setLotFrontageVal(val);
	}

	onBsmtFinSF1Change = (event) => {
		let val = event.target.value;
		this.props.setBsmtFinSF1Val(val);
	}

	onYearRemodAddChange = (event) => {
		let val = event.target.value;
		this.props.setYearRemodAddVal(val);
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
		          		onChange = { this.onYearRemodAddChange }
		          	/>
				</div>
			</div>
		)
	}
}

export default FormsPg11;