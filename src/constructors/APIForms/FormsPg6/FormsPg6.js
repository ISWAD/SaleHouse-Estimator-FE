import React , {Component} from 'react';

class FormsPg6 extends Component{
	
	constructor(){
		super();
	}

	render() {
		return(
			<div className = "FormContainer">
				<div className = "InputContainer">
			        <label className = "db fw6 lh-copy f5" htmlFor = "CentralAir"> Central air conditioning </label>
			        <select 
		              name="CentralAir"
		              id="CentralAir"
		              className="pa2 ba bg-transparent hover-bg-purple hover-white w-100 shadow-2"
       				>
		              <option value= "1" > Yes</option>
		              <option value= "0" > No </option>
       				</select>
				</div>

				<div className = "InputContainer">
			       	<label className = "db fw6 lh-copy f5" htmlFor = "Foundation"> Type of foundation </label>
			        <select 
		              name="Foundation"
		              id="Foundation"
		              className="pa2 ba bg-transparent hover-bg-purple hover-white w-100 shadow-2"
       				>
		              <option value= "Foundation_group1" > Brick & Tile </option>
		              <option value= "CBlock" > Cinder Block </option>
		              <option value= "Foundation_group2" > Poured Contrete </option>
					  <option value= "Slab" > Slab </option>
					  <option value= "Foundation_group1" > Stone </option>
					  <option value= "Foundation_group2" > Wood </option>
       				</select>
				</div>

				<div className = "InputContainer">
			        <label className = "db fw6 lh-copy f5" htmlFor = "Functional"> Home functionality (Assume typical unless deductions are warranted) </label>
			        <select 
		              name="Functional"
		              id="Functional"
		              className="pa2 ba bg-transparent hover-bg-purple hover-white w-100 shadow-2"
       				>
		              <option value= "7" > Typical Functionality </option>
		              <option value= "6" > Minor Deductions 1 </option>
		              <option value= "5" > Minor Deductions 2 </option>
					  <option value= "4" > Moderate Deductions </option>
					  <option value= "3" > Major Deductions 1 </option>
					  <option value= "2" > Major Deductions 2 </option>
					  <option value= "1" > Severely Damaged </option>
					  <option value= "0" > Salvage only </option>
       				</select>
				</div>

				<div className = "InputContainer">
			        <label className = "db fw6 lh-copy f5 TwoLines" htmlFor = "HouseStyle"> Style of dwelling </label>
			        <select 
		              name="HouseStyle"
		              id="HouseStyle"
		              className="pa2 ba bg-transparent hover-bg-purple hover-white w-100 shadow-2"
       				>
		              <option value= "HouseStyle_group1" > One story </option>
		              <option value= "1.5Fin" title = "One and one-half story (2nd level finished)" > One and one-half story I </option>
		              <option value= "1.5Unf" title = "One and one-half story (2nd level unfinished)" > One and one-half story II </option>
					  <option value= "2Story" > Two story </option>
					  <option value= "HouseStyle_group1" title = "Two and one-half story (2nd level finished)" > Two and one-half story I </option>
					  <option value= "HouseStyle_group1" title = "Two and one-half story (2nd level unfinished)"> Two and one-half story II</option>
					  <option value= "SFoyer" > Split Foyer </option>
					  <option value= "SLvl" > Split Level </option>
					  <option value= "HouseStyle_group1" > Other </option>
       				</select>
				</div>
			</div>
		)
	}
}

export default FormsPg6;