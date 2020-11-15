import React , {Component} from 'react';

class FormsPg1 extends Component{
	
	constructor(props){
		super(props);
	}

	onLotShapeChange = (event) => {
		let val = event.target.value;
		this.props.setLotShapeVal(val);
		document.getElementById("LotShape").value = val;

	}

	onSaleTypeChange = (event) => {
		let val = event.target.value;
		this.props.setSaleTypeVal(val);
	}

	onBsmtExposureChange = (event) => {
		let val = event.target.value;
		this.props.setBsmtExposureVal(val);
	}

	onNeighborhoodChange = (event) => {
		let val = event.target.value;
		this.props.setNeighborhoodVal(val);
	}

	render() {
		return(
			<div className = "FormContainer">

				<div className = "InputContainer">
              		<label className = "db fw6 lh-copy f5" htmlFor = "LotShape"> General Shape of Property </label>
              		<select 
                		name="LotShape" 
                		id="LotShape"
                		className="pa2 ba bg-transparent hover-bg-purple hover-white w-100 shadow-2"
                		onChange = { this.onLotShapeChange }
              		>
                		<option value = "4"> Regular </option>
                		<option value = "3"> Slightly Regular </option>
                		<option value = "2"> Moderately Regular </option>
                		<option value = "1"> Irregular </option>
              		</select>
            	</div>

            	<div className = "InputContainer">
            		<label className = "db fw6 lh-copy f5" htmlFor = "SaleType"> Type of sale </label>
            		<select 
              			name="SaleType" 
              			id="SaleType"
              			className="pa2 ba bg-transparent hover-bg-purple hover-white w-100 shadow-2"
              			onChange = { this.onSaleTypeChange }
            		>
		              <option value="SaleType_group3" title = "Warranty Deed - Conventional"> Conventional </option>
		              <option value="SaleType_group1" title = "Warranty Deed - Cash"> Cash </option>
		              <option value="SaleType_group1"> Home just constructed and sold </option>
		              <option value="COD"> Court Officer Deed/Estate </option>
		              <option value="SaleType_group1" title="Contract 15% Down payment regular terms"> 15% D.P.</option>
		              <option value="SaleType_group2" title = "Contract Low Down payment and low interest"> Low D.P. </option>
		              <option value="SaleType_group3"> Contract Low Interest </option>
		              <option value="SaleType_group2"> Contract Low Down </option>
		              <option value="SaleType_group3"> Other </option>
            		</select>
          		</div>

          		<div className = "InputContainer">
		            <label className = "db fw6 lh-copy f5" htmlFor = "BsmtExposure"> Refers to walkout or garden level walls </label>
		            <select 
		              name="BsmtExposure" 
		              id="BsmtExposure"
		              className="pa2 ba bg-transparent hover-bg-purple hover-white w-100 shadow-2"
		              onChange = { this.onBsmtExposureChange }
            		>
		              <option value= "4"> Good Exposure </option>
		              <option value= "3"> Average Exposure </option>
		              <option value= "2"> Mimimum Exposure </option>
		              <option value= "1">No Exposure </option>
		              <option value= "0"> No Basement</option>
            		</select>
          		</div>

          		<div className = "InputContainer">
		            <label className = "db fw6 lh-copy f5" htmlFor = "Neighborhood"> Physical locations within Ames city limits</label>
		            <select 
		              name="Neighborhood" 
		              id="Neighborhood"
		              className="pa2 ba bg-transparent hover-bg-purple hover-white w-100 shadow-2"
		              onChange = { this.onNeighborhoodChange }
            		>
		              <option value="Neighborhood_group1"> Bloomington Heights </option>
		              <option value="Neighborhood_group2"> Bluestem </option>
		              <option value="Neighborhood_group3"> Briardale </option>
		              <option value="Neighborhood_group2"> Brookside </option>
		              <option value="Neighborhood_group1"> Clear Creek </option>
		              <option value="CollgCr"> College Creek </option>
		              <option value="Neighborhood_group1"> Crawford </option>
		              <option value="Edwards"> Edwards </option>
		              <option value="Gilbert"> Gilbert </option>
		              <option value="Neighborhood_group3"> Iowa DOT and Rail Road </option>
		              <option value="Neighborhood_group3"> Meadow Village </option>
		              <option value="Neighborhood_group2"> Mitchell </option>
		              <option value="NAmes"> North Ames </option>
		              <option value="Neighborhood_group4"> Northridge </option>
		              <option value="Neighborhood_group2"> Northpark Villa </option>
		              <option value="NridgHt"> Northridge Heights </option>
		              <option value="NWAmes"> Northwest Ames </option>
		              <option value="OldTown"> Old Town </option>
		              <option value="Neighborhood_group2"> South & West of Iowa State University </option>
		              <option value="Sawyer"> Sawyer </option>
		              <option value="Neighborhood_group1"> Sawyer West </option>
		              <option value="Somerst"> Somerset </option>
		              <option value="StoneBr"> Stone Brook </option>
		              <option value="Neighborhood_group4"> Timberland </option>
		              <option value="Neighborhood_group4"> Veenker </option>
		              <option value="NAmes"> Other </option>
            		</select>
          		</div>

			</div>
		)
	}
}

export default FormsPg1;