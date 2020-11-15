import React , {Component} from 'react';

class FormsPg10 extends Component{
	
	constructor(props){
		super(props);
	}

	onMasVnrAreaChange = (event) => {
		let val = event.target.value;
		this.props.setMasVnrAreaVal(val);
	}

	onGarageYrBltChange = (event) => {
		let val = event.target.value;
		this.props.setGarageYrBltVal(val);
	}

	onLotAreaChange = (event) => {
		let val = event.target.value;
		this.props.setLotAreaVal(val);
	}

	onHalfBathChange = (event) => {
		let val = event.target.value;
		this.props.setHalfBathVal(val);
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
		          		onChange = { this.onHalfBathChange }
		          	/>
				</div>
			</div>
		)
	}
}

export default FormsPg10;