import React from 'react';

const APIForm = ({ onCementChange, onSlagChange, onFlyAshChange, onWaterChange, onSuperplasticizerChange, onCAChange, onFAChange, onAgeChange, onSubmitBtnClick }) => {
	return(
		<div className = "FormContainer">
			<div className = "InputContainer">
				<label className = "db fw6 lh-copy f5" htmlFor = "Cement"> Cement (Kg/m&#179;) </label>
	        		<input 
	        			type = "text" 
	        			name = "Cement" 
			          	id = "Cement" 
			          	className="pa2 input-reset ba bg-transparent hover-bg-purple hover-white w-100 shadow-2"
			          	style = {{ border: "solid 1px", borderRadius: "5px", borderColor: "white", color: "white", margin: "10px auto"}}
			          	placeholder="Enter a number"
			          	onChange = { onCementChange }
			        />
			</div>
			
			<div className = "InputContainer">
				<label className = "db fw6 lh-copy f5" htmlFor = "Slag"> Blast Furnace Slag (Kg/m&#179;) </label>
	        		<input 
	        			type = "text" 
	        			name = "Slag" 
			          	id = "Slag" 
			          	className="pa2 input-reset ba bg-transparent hover-bg-purple hover-white w-100 shadow-2"
			          	style = {{ border: "solid 1px", borderRadius: "5px", borderColor: "white", color: "white", margin: "10px auto"}}
			          	placeholder="Enter a number"
			          	onChange = { onSlagChange }
			        />
			</div>

			<div className = "InputContainer">
				<label className = "db fw6 lh-copy f5" htmlFor = "FlyAsh"> Fly Ash(Kg/m&#179;) </label>
	        		<input 
	        			type = "text" 
	        			name = "FlyAsh" 
			          	id = "FlyAsh" 
			          	className="pa2 input-reset ba bg-transparent hover-bg-purple hover-white w-100 shadow-2"
			          	style = {{ border: "solid 1px", borderRadius: "5px", borderColor: "white", color: "white", margin: "10px auto"}}
			          	placeholder="Enter a number"
			          	onChange = { onFlyAshChange }
			        />
			</div>

			<div className = "InputContainer">
				<label className = "db fw6 lh-copy f5" htmlFor = "Water"> Water (Kg/m&#179;) </label>
	        		<input 
	        			type = "text" 
	        			name = "Water" 
			          	id = "Water" 
			          	className="pa2 input-reset ba bg-transparent hover-bg-purple hover-white w-100 shadow-2"
			          	style = {{ border: "solid 1px", borderRadius: "5px", borderColor: "white", color: "white", margin: "10px auto"}}
			          	placeholder="Enter a number"
			          	onChange = { onWaterChange }
			        />
			</div>

			<div className = "InputContainer">
				<label className = "db fw6 lh-copy f5" htmlFor = "Superplasticizer"> Superplasticizer (Kg/m&#179;) </label>
	        		<input 
	        			type = "text" 
	        			name = "Superplasticizer" 
			          	id = "Superplasticizer" 
			          	className="pa2 input-reset ba bg-transparent hover-bg-purple hover-white w-100 shadow-2"
			          	style = {{ border: "solid 1px", borderRadius: "5px", borderColor: "white", color: "white", margin: "10px auto"}}
			          	placeholder="Enter a number"
			          	onChange = { onSuperplasticizerChange }
			        />
			</div>

			<div className = "InputContainer">
				<label className = "db fw6 lh-copy f5" htmlFor = "CA"> Coarse Aggregate (Kg/m&#179;) </label>
	        		<input 
	        			type = "text" 
	        			name = "CA" 
			          	id = "CA" 
			          	className="pa2 input-reset ba bg-transparent hover-bg-purple hover-white w-100 shadow-2"
			          	style = {{ border: "solid 1px", borderRadius: "5px", borderColor: "white", color: "white", margin: "10px auto"}}
			          	placeholder="Enter a number"
			          	onChange = { onCAChange }
			        />
			</div>

			<div className = "InputContainer">
				<label className = "db fw6 lh-copy f5" htmlFor = "FA"> Fine Aggregate (Kg/m&#179;) </label>
	        		<input 
	        			type = "text" 
	        			name = "FA" 
			          	id = "FA" 
			          	className="pa2 input-reset ba bg-transparent hover-bg-purple hover-white w-100 shadow-2"
			          	style = {{ border: "solid 1px", borderRadius: "5px", borderColor: "white", color: "white", margin: "10px auto"}}
			          	placeholder="Enter a number"
			          	onChange = { onFAChange }
			        />
			</div>

			<div className = "InputContainer">
				<label className = "db fw6 lh-copy f5" htmlFor = "Age"> Age (day) </label>
	        		<input 
	        			type = "text" 
	        			name = "Age" 
			          	id = "Age" 
			          	className="pa2 input-reset ba bg-transparent hover-bg-purple hover-white w-100 shadow-2"
			          	style = {{ border: "solid 1px", borderRadius: "5px", borderColor: "white", color: "white", margin: "10px auto"}}
			          	placeholder="Enter a number"
			          	onChange = { onAgeChange }
			        />
			</div>
			<input
				className="b ph3 pv2 input-reset ba b--black bg-transparent pointer f5 dib btnScale shadow-2 hover-bg-purple SubmitBtn"
				type="submit"
				value="Submit"
				style = {{ color: "white", borderColor: "white", borderRadius: "10px", border: "solid 1px" }}
				onClick = { onSubmitBtnClick }
			/>
	</div>
	)
}


export default APIForm;