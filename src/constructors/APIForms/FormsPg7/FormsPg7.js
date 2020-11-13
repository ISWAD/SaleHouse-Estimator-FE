import React , {Component} from 'react';

class FormsPg7 extends Component{
	
	constructor(){
		super();
	}

	render() {
		return(
			<div className = "FormContainer">
				<div className = "InputContainer">
			        <label className = "db fw6 lh-copy f5" htmlFor = "MSZoning"> Identifies the general zoning classification of the sale </label>
			        <select 
		              name="MSZoning"
		              id="MSZoning"
		              className="pa2 ba bg-transparent hover-bg-purple hover-white w-100 shadow-2"
       				>
		              <option value= "MSZoning_group1" > Agriculture </option>
		              <option value= "C (all)" > Commercial </option>
					  <option value= "MSZoning_group1" > Floating Village Residential </option>
              		  <option value= "MSZoning_group1" > Industrial </option>
					  <option value= "MSZoning_group2" > Residential High Density </option>
					  <option value= "MSZoning_group1" > Residential Low Density </option>
					  <option value= "MSZoning_group1" > Residential Low Density Park </option>
					  <option value= "MSZoning_group2" > Residential Medium Density </option>
					  <option value= "MSZoning_group1" > Other </option>
       				</select>
				</div>

				<div className = "InputContainer">
			        <label className = "db fw6 lh-copy f5" htmlFor = "Exterior1st"> Exterior covering on house </label>
			        <select 
		              name="Exterior1st" 
		              id="Exterior1st"
		              className="pa2 ba bg-transparent hover-bg-purple hover-white w-100 shadow-2"
       				>
		              <option value= "AsbShng"> Asbestos Shingles </option>
		              <option value= "Exterior1st_group1"> Asphalt Shingles </option>
		              <option value= "Exterior1st_group1"> Brick Common </option>
		              <option value= "BrkFace"> Brick Face </option>
					  <option value= "Exterior1st_group1"> Cinder Block </option>
					  <option value= "CmentBd"> Cement Board </option>
					  <option value= "HdBoard"> Hard Board </option>
		              <option value= "Exterior1st_group2"> Imitation Stucco </option>
		              <option value= "MetalSd"> Metal Siding </option>
		              <option value= "VinylSd"> Other </option>
		              <option value= "Plywood"> Plywood </option>
		              <option value= "VinylSd"> PreCast </option>
					  <option value= "Exterior1st_group2"> Stone </option>
					  <option value= "Exterior2nd_group2"> Stucco </option>
					  <option value= "VinylSd"> Vinyl Siding </option>
					  <option value= "Wd Sdng"> Wood Siding </option>
					  <option value= "WdShing"> Wood Shingles </option>
       				</select>
				</div>

				<div className = "InputContainer">
			        <label className = "db fw6 lh-copy f5" htmlFor = "GarageFinish"> Interior finish of the garage </label>
			        <select 
		              name="GarageFinish"
		              id="GarageFinish"
		              className="pa2 ba bg-transparent hover-bg-purple hover-white w-100 shadow-2"
       				>
		              <option value= "3" > Finished </option>
		              <option value= "2" > Rough Finished </option>
		              <option value= "1" > Unfinished </option>
					  <option value= "0" > No Garage </option>
       				</select>
				</div>
			</div>
		)
	}
}

export default FormsPg7;