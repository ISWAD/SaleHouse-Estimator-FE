import React , {Component} from 'react';

class FormsPg2 extends Component{
	
	constructor(){
		super();
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
       				>
		              <option value= "5"> Excellent - Exceptional Masonry Fireplace </option>
		              <option value= "4"> Good - Masonry Fireplace in main level </option>
		              <option value= "3"> Average - Prefabricated Fireplace in main living area or Masonry Fireplace in basement </option>
		              <option value= "2">Fair - Prefabricated Fireplace in basement </option>
					  <option value= "1"> Poor - Ben Franklin Stove </option>
					  <option value= "0"> No Fireplace </option>
       				</select>
				</div>

				<div className = "InputContainer">
			       <label className = "db fw6 lh-copy f5" htmlFor = "PavedDrive"> Paved driveway </label>
			       <select 
		              name="PavedDrive" 
		              id="PavedDrive"
		              className="pa2 ba bg-transparent hover-bg-purple hover-white w-100 shadow-2"
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
       			   >
		              <option value= "Normal"> Normal Sale </option>
		              <option value= "Abnorml"> Abnormal Sale -  trade, foreclosure, short sale</option>
		              <option value= "AdjLand"> Adjoining Land Purchase </option>
		              <option value= "SaleCondition_group1">Allocation - two linked properties with separate deeds, typically condo with a garage unit </option>
					  <option value= "SaleCondition_group1"> Sale between family members </option>
					  <option value= "Partial"> Home was not completed when last assessed (associated with New Homes) </option>
					  <option value= "Normal"> Other </option>
       			   </select>
				</div>

				<div className = "InputContainer">
			       <label className = "db fw6 lh-copy f5" htmlFor = "Exterior2nd"> Exterior covering on house (if more than one material) </label>
			       <select 
		              name="Exterior2nd" 
		              id="Exterior2nd"
		              className="pa2 ba bg-transparent hover-bg-purple hover-white w-100 shadow-2"
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