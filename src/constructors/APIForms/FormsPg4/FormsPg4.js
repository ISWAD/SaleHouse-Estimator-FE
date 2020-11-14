import React , {Component} from 'react';

class FormsPg4 extends Component{
	
	constructor(){
		super();
	}

	render() {
		return(
			<div className = "FormContainer">
				<div className = "InputContainer">
			       <label className = "db fw6 lh-copy f5" htmlFor = "BsmtCond"> Evaluates the general condition of the basement </label>
			       <select 
		              name="BsmtCond"
		              id="BsmtCond"
		              className="pa2 ba bg-transparent hover-bg-purple hover-white w-100 shadow-2"
       			>
		              <option value= "4" > Good </option>
		              <option value= "3" > Typical</option>
					  <option value= "2" > Fair</option>
					  <option value= "1" > Poor</option>
					  <option value= "0" > No Basement </option>
       				</select>
				</div>

				<div className = "InputContainer">
			        <label className = "db fw6 lh-copy f5" htmlFor = "Condition1"> Proximity to various conditions </label>
			        <select 
		              name="Condition1"
		              id="Condition1"
		              className="pa2 ba bg-transparent hover-bg-purple hover-white w-100 shadow-2"
       				>
		              <option value= "Condition1_group1" > Adjacent to arterial street </option>
		              <option value= "Condition1_group3" > Adjacent to feeder street </option>
		              <option value= "Norm" > Normal </option>
					  <option value= "Condition1_group1" > Within 200' of North-South Railroad </option>
					  <option value= "Condition1_group1" > Adjacent to North-South Railroad </option>
					  <option value= "Condition1_group2" title = "Near positive off-site feature--park, greenbelt, etc."> Near greenbelt</option>
					  <option value= "Condition1_group2" > Adjacent to postive off-site feature </option>
					  <option value= "Condition1_group2" > Within 200' of East-West Railroad </option>
					  <option value= "Condition1_group3" > Adjacent to East-West Railroad </option>
       				</select>
				</div>

				<div className = "InputContainer">
			        <label className = "db fw6 lh-copy f5" htmlFor = "HeatingQC"> Heating quality and condition </label>
			        <select 
		              name="HeatingQC"
		              id="HeatingQC"
		              className="pa2 ba bg-transparent hover-bg-purple hover-white w-100 shadow-2"
       			>
	                  <option value= "5" > Excellent </option>
	              	  <option value= "4" > Good </option>
					  <option value= "3" > Average/Typical </option>
					  <option value= "2" > Fair </option>
					  <option value= "1" > Poor </option>
       				</select>
				</div>

				<div className = "InputContainer">
			        <label className = "db fw6 lh-copy f5" htmlFor = "GarageType"> Garage location </label>
			        <select 
		              name="GarageType"
		              id="GarageType"
		              className="pa2 ba bg-transparent hover-bg-purple hover-white w-100 shadow-2"
       				>
		              <option value= "GarageType_group1" > More than one type of garage </option>
		              <option value= "Attchd" > Attached to home </option>
		              <option value= "Basment" > Basement Garage </option>
					  <option value= "BuiltIn" title = "Built-In (Garage part of house - typically has room above garage)" > Built-In </option>
					  <option value= "GarageType_group1" > Car Port </option>
					  <option value= "Detchd" > Detached from home </option>
					  <option value= "GarageType_group1" > No Garage </option>
					  <option value= "Attchd" > Other </option>
       				</select>
				</div>
			</div>
		)
	}
}

export default FormsPg4;