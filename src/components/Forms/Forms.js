import React from 'react';

const Forms = () => {
	return (
		<div>
			<div className = "FormContainer">
			<div className = "InputContainer">
			<label className = "db fw6 lh-copy f5" htmlFor = "cars"> Cars </label>
    		<select 
     			name="cars" 
     			id="cars"
     			className="pa2 ba bg-transparent hover-bg-purple hover-white w-100 shadow-2"
    		>
    			<option value="volvo">Volvo</option>
        		<option value="saab">Saab</option>
        		<option value="mercedes">Mercedes</option>
        		<option value="audi">Audi</option>
    		</select>
    		</div>
    		
    		</div>
    	</div>
    )
}

export default Forms;