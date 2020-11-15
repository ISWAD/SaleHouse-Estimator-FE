import React , {Component} from 'react';

class FormsPg2 extends Component{
	
	constructor(props){
		super(props);
	}

	onFireplaceQuChange = (event) => {
		let val = event.target.value;
		this.props.setFireplaceQuVal(val);
	}

	onPavedDriveChange = (event) => {
		let val = event.target.value;
		this.props.setPavedDriveVal(val);
	}

	onSaleConditionChange = (event) => {
		let val = event.target.value;
		this.props.setSaleConditionVal(val);
	}

	onExterior2ndChange = (event) => {
		let val = event.target.value;
		this.props.setExterior2ndVal(val);
	}

	render() {
		return(
			<div className = "FormContainer">
				<div className = "InputContainer">
			        <label className = "db fw6 lh-copy f5" htmlFor = "FireplaceQu"> Fireplace quality </label>
			        <select 
		              name="FireplaceQu" 
		              id="FireplaceQu"
		              className="pa2 ba bg-transparent hover-bg-purple hover-white w-100 shadow-2"
		              onChange = { this.onFireplaceQuChange }
       				>
		              <option value= "5"> Excellent</option>
		              <option value= "4"> Good</option>
		              <option value= "3"> Average</option>
		              <option value= "2">Fair</option>
					  <option value= "1"> Poor</option>
					  <option value= "0"> No Fireplace </option>
       				</select>
				</div>

				<div className = "InputContainer">
			       <label className = "db fw6 lh-copy f5" htmlFor = "PavedDrive"> Paved driveway </label>
			       <select 
		              name="PavedDrive" 
		              id="PavedDrive"
		              className="pa2 ba bg-transparent hover-bg-purple hover-white w-100 shadow-2"
		              onChange = { this.onPavedDriveChange }
       			   >
		              <option value= "3"> Paved </option>
		              <option value= "2"> Partial Pavement </option>
		              <option value= "1"> Dirt/Gravel </option>
        			</select>
				</div>

				<div className = "InputContainer">
			       <label className = "db fw6 lh-copy f5" htmlFor = "SaleCondition"> Condition of sale</label>
			       <select 
		              name="SaleCondition" 
		              id="SaleCondition"
		              className="pa2 ba bg-transparent hover-bg-purple hover-white w-100 shadow-2"
		              onChange = { this.onSaleConditionChange }
       			   >
		              <option value= "Normal"> Normal Sale </option>
		              <option value= "Abnorml" title = "Abnormal Sale -  trade, foreclosure, short sale">Abnormal Sale</option>
		              <option value= "AdjLand"> Adjoining Land Purchase </option>
		              <option value= "SaleCondition_group1" title = "Allocation - two linked properties with separate deeds, typically condo with a garage unit">Allocation</option>
					  <option value= "SaleCondition_group1"> Sale between family members </option>
					  <option value= "Partial"> Home was not completed</option>
					  <option value= "Normal"> Other </option>
       			   </select>
				</div>

				<div className = "InputContainer">
			       <label className = "db fw6 lh-copy f5" htmlFor = "Exterior2nd"> Exterior covering on house (if more than one material) </label>
			       <select 
		              name="Exterior2nd" 
		              id="Exterior2nd"
		              className="pa2 ba bg-transparent hover-bg-purple hover-white w-100 shadow-2"
		              onChange = { this.onExterior2ndChange }
       			   >
		              <option value= "Exterior2nd_group1"> Asbestos Shingles </option>
		              <option value= "Exterior2nd_group1"> Asphalt Shingles </option>
		              <option value= "Exterior2nd_group1"> Brick Common </option>
		              <option value= "BrkFace"> Brick Face </option>
					  <option value= "Exterior2nd_group1"> Cinder Block </option>
					  <option value= "CmentBd"> Cement Board </option>
					  <option value= "HdBoard"> Hard Board </option>
		              <option value= "Exterior2nd_group2"> Imitation Stucco </option>
		              <option value= "MetalSd"> Metal Siding </option>
		              <option value= "VinylSd"> Other </option>
		              <option value= "Plywood"> Plywood </option>
		              <option value= "VinylSd"> PreCast </option>
					  <option value= "Exterior2nd_group2"> Stone </option>
					  <option value= "Exterior2nd_group2"> Stucco </option>
					  <option value= "VinylSd"> Vinyl Siding </option>
					  <option value= "Wd Sdng"> Wood Siding </option>
					  <option value= "Exterior2nd_group2"> Wood Shingles </option>
       			   </select>
				</div>
			</div>
		)
	}
}

export default FormsPg2;