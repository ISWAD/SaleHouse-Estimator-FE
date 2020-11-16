import React , {Component} from 'react';

const re = /^(\d+)?(\.)?(\d+)?$/;
const re2 = /^[.]?(\d+)?$/;

let MasVnrAreaval = '';
let GarageYrBltval = '';
let LotAreaval = '';
let HalfBathval = '';

class FormsPg10 extends Component{
	
	constructor(props){
		super(props);
	}

	onMasVnrAreaChange = (event) => {
		if (re.test(event.target.value) || re2.test(event.target.value)) {
			MasVnrAreaval = event.target.value;
			this.props.setMasVnrAreaVal(MasVnrAreaval);
		} else {
			document.getElementById("MasVnrArea").value = MasVnrAreaval;
		}
	}

	onGarageYrBltChange = (event) => {
		if (re.test(event.target.value) || re2.test(event.target.value)) {
			GarageYrBltval = event.target.value;
			this.props.setGarageYrBltVal(GarageYrBltval);
		} else {
			document.getElementById("GarageYrBlt").value = GarageYrBltval;
		}
	}

	onLotAreaChange = (event) => {
		if (re.test(event.target.value) || re2.test(event.target.value)) {
			LotAreaval = event.target.value;
			this.props.setLotAreaVal(LotAreaval);
		} else {
			document.getElementById("LotArea").value = LotAreaval;
		}
	}

	onHalfBathChange = (event) => {
		if (re.test(event.target.value) || re2.test(event.target.value)) {
			HalfBathval = event.target.value;
			this.props.setHalfBathVal(HalfBathval);
		} else {
			document.getElementById("HalfBath").value = HalfBathval;
		}
	}

	render() {
		return(
			<div className = "FormContainer">
				<div className = "InputContainer">
					<label className = "db fw6 lh-copy f5" htmlFor = "MasVnrArea"> Masonry veneer area in square feet [0-1600] </label>
        			<input 
						type = "text" 
		          		name = "MasVnrArea" 
		          		id = "MasVnrArea" 
		          		className="pa2 input-reset ba bg-transparent hover-bg-purple hover-white w-100 shadow-2"
		          		style = {{ border: "solid 1px", borderRadius: "5px", borderColor: "white", color: "white", margin: "10px auto"}}
		          		placeholder="Just enter a valid number, like 12.34"
		          		onChange = { this.onMasVnrAreaChange }
		          	/>
				</div>

				<div className = "InputContainer">
					<label className = "db fw6 lh-copy f5" htmlFor = "GarageYrBlt"> Year garage was built [1900-2010] </label>
        			<input 
						type = "text" 
          				name = "GarageYrBlt" 
          				id = "GarageYrBlt" 
          				className="pa2 input-reset ba bg-transparent hover-bg-purple hover-white w-100 shadow-2"
          				style = {{ border: "solid 1px", borderRadius: "5px", borderColor: "white", color: "white", margin: "10px auto"}}
          				placeholder="Just enter a valid number, like 12.34"
          				onChange = { this.onGarageYrBltChange }
          			/>
				</div>

				<div className = "InputContainer">
					<label className = "db fw6 lh-copy f5" htmlFor = "LotArea"> Lot size in square feet [1300-215245] </label>
        			<input 
						type = "text" 
		          		name = "LotArea" 
		          		id = "LotArea" 
		          		className="pa2 input-reset ba bg-transparent hover-bg-purple hover-white w-100 shadow-2"
		          		style = {{ border: "solid 1px", borderRadius: "5px", borderColor: "white", color: "white", margin: "10px auto"}}
		          		placeholder="Just enter a valid number, like 12.34"
		          		onChange = { this.onLotAreaChange }
		          	/>
				</div>

				<div className = "InputContainer">
					<label className = "db fw6 lh-copy f5" htmlFor = "HalfBath"> Half baths above grade [0-2] </label>
        			<input 
						type = "text" 
		          		name = "HalfBath" 
		          		id = "HalfBath" 
		          		className="pa2 input-reset ba bg-transparent hover-bg-purple hover-white w-100 shadow-2"
		          		style = {{ border: "solid 1px", borderRadius: "5px", borderColor: "white", color: "white", margin: "10px auto"}}
		          		placeholder="Just enter a valid number, like 12.34"
		          		onChange = { this.onHalfBathChange }
		          	/>
				</div>
			</div>
		)
	}
}

export default FormsPg10;