import React , {Component} from 'react';

class FormsPg5 extends Component{
	
	constructor(){
		super();
	}

	render() {
		return(
			<div className = "FormContainer">
				<div className = "InputContainer">
			        <label className = "db fw6 lh-copy f5" htmlFor = "BsmtFinType1"> Rating of basement finished area </label>
			        <select 
		              name="BsmtFinType1"
		              id="BsmtFinType1"
		              className="pa2 ba bg-transparent hover-bg-purple hover-white w-100 shadow-2"
       				>
		              <option value= "6" > Good Living Quarters </option>
		              <option value= "5" > Average Living Quarters </option>
		              <option value= "4" > Below Average Living Quarters </option>
					  <option value= "3" > Average Rec Room </option>
					  <option value= "2" > Low Quality </option>
					  <option value= "1" > Unfinshed </option>
					  <option value= "0" > No Basement </option>
       				</select>
				</div>

				<div className = "InputContainer">
			        <label className = "db fw6 lh-copy f5" htmlFor = "OverallCond"> Rates the overall condition of the house </label>
			        <select 
		              name="OverallCond"
		              id="OverallCond"
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
			        <label className = "db fw6 lh-copy f5" htmlFor = "BsmtQual"> Evaluates the height of the basement </label>
			        <select 
		              name="BsmtQual"
		              id="BsmtQual"
		              className="pa2 ba bg-transparent hover-bg-purple hover-white w-100 shadow-2"
       				>
		              <option value= "5" > Excellent (100+ inches) </option>
		              <option value= "4" > Good (90-99 inches) </option>
		              <option value= "3" > Typical (80-89 inches) </option>
					  <option value= "2" > Fair (70-79 inches) </option>
					  <option value= "1" > Poor (&lt;70 inches) </option>
					  <option value= "0" > No Basement </option>
       				</select>
       			</div>

       			<div className = "InputContainer">
					<label className = "db fw6 lh-copy f5" htmlFor = "KitchenQual"> Kitchen quality </label>
				    <select 
			        	name="KitchenQual"
			            id="KitchenQual"
			            className="pa2 ba bg-transparent hover-bg-purple hover-white w-100 shadow-2"
       				>
			        	<option value= "5" > Excellent </option>
			            <option value= "4" > Good </option>
			            <option value= "3" > Typical </option>
						<option value= "2" > Fair </option>
						<option value= "1" > Poor </option>
       				</select>
				</div>			
			</div>
		)
	}
}

export default FormsPg5;