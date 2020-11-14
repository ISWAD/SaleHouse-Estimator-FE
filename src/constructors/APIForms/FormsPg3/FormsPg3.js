import React , {Component} from 'react';

class FormsPg3 extends Component{
	
	constructor(){
		super();
	}

	render() {
		return(
			<div className = "FormContainer">
				<div className = "InputContainer">
			       <label className = "db fw6 lh-copy f5" htmlFor = "Electrical"> Electrical system </label>
			       <select 
		              name="Electrical" 
		              id="Electrical"
		              className="pa2 ba bg-transparent hover-bg-purple hover-white w-100 shadow-2"
       			>
		              <option value= "Electrical_group2" title = "Standard Circuit Breakers & Romex"> Standard Circuit</option>
		              <option value= "FuseA" title = "Fuse Box over 60 AMP and all Romex wiring (Average)"> Fuse Box over 60 AMP</option>
		              <option value= "Electrical_group1" title = "60 AMP Fuse Box and mostly Romex wiring (Fair)"> mostly Romex wiring </option>
		              <option value= "Electrical_group1" title = "60 AMP Fuse Box and mostly knob & tube wiring (poor)"> mostly knob & tube wiring </option>
					  <option value= "Electrical_group1"> Mixed </option>
					  <option value= "Electrical_group2"> Other </option>
       				</select>
				</div>

				<div className = "InputContainer">
	       			<label className = "db fw6 lh-copy f5" htmlFor = "OverallQual"> Rates the overall material and finish of the house </label>
	       			<select 
		              name="OverallQual"
		              id="OverallQual"
		              className="pa2 ba bg-transparent hover-bg-purple hover-white w-100 shadow-2"
	       			>
		              <option value= "10" > Very Excellent </option>
		              <option value= "9" > Excellent </option>
		              <option value= "8" > Very Good </option>
					  <option value= "7" > Good </option>
					  <option value= "6" > Above Average </option>
					  <option value= "5" > Average </option>
					  <option value= "4" > Below Average </option>
					  <option value= "3" > Fair </option>
					  <option value= "2" > Poor </option>
					  <option value= "1" > Very Poor </option>
	       			</select>
				</div>

				<div className = "InputContainer">
			       <label className = "db fw6 lh-copy f5" htmlFor = "MasVnrType"> Masonry veneer type </label>
			       <select 
		              name="MasVnrType" 
		              id="MasVnrType"
		              className="pa2 ba bg-transparent hover-bg-purple hover-white w-100 shadow-2"
       			   >
		              <option value= "BrkCmn"> Brick Common </option>
		              <option value= "BrkFace"> Brick Face </option>
		              <option value= "Stone"> Stone </option>
					  <option value= "None"> None </option>
					  <option value= "None"> Other </option>
       			   </select>
				</div>

				<div className = "InputContainer">
			       <label className = "db fw6 lh-copy f5" htmlFor = "ExterQual"> Evaluates the quality of the material on the exterior </label>
			       <select 
		              name="ExterQual"
		              id="ExterQual"
		              className="pa2 ba bg-transparent hover-bg-purple hover-white w-100 shadow-2"
       			   >
	                  <option value= "5" > Excellent </option>
	              	  <option value= "4" > Good </option>
					  <option value= "3" > Average/Typical </option>
					  <option value= "2" > Fair </option>
					  <option value= "1" > Poor </option>
       			   </select>
				</div>
			</div>
		)
	}
}

export default FormsPg3;