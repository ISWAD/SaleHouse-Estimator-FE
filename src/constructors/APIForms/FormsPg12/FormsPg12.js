import React , {Component} from 'react';

class FormsPg12 extends Component{
	
	constructor(props){
		super(props);
	}

	onOpenPorchSFChange = (event) => {
		let val = event.target.value;
		this.props.setOpenPorchSFVal(val);
	}

	onBedroomAbvGrChange = (event) => {
		let val = event.target.value;
		this.props.setBedroomAbvGrVal(val);
	}

	onKitchenAbvGrChange = (event) => {
		let val = event.target.value;
		this.props.setKitchenAbvGrVal(val);
	}

	onScreenPorchChange = (event) => {
		let val = event.target.value;
		this.props.setScreenPorchVal(val);
	}

	render() {
		return(
			<div className = "FormContainer">
				<div className = "InputContainer">
					<label className = "db fw6 lh-copy f5" htmlFor = "OpenPorchSF"> Open porch area in square feet [0-547]</label>
        			<input 
						type = "text" 
		          		name = "OpenPorchSF" 
		          		id = "OpenPorchSF" 
		          		className="pa2 input-reset ba bg-transparent hover-bg-purple hover-white w-100 shadow-2"
		          		style = {{ border: "solid 1px", borderRadius: "5px", borderColor: "white", color: "white", margin: "10px auto"}}
		          		onChange = { this.onOpenPorchSFChange }
		          	/>
				</div>

				<div className = "InputContainer">
					<label className = "db fw6 lh-copy f5" htmlFor = "BedroomAbvGr"> Bedrooms above grade [0-8] </label>
        			<input 
						type = "text" 
		          		name = "BedroomAbvGr" 
		          		id = "BedroomAbvGr" 
		          		className="pa2 input-reset ba bg-transparent hover-bg-purple hover-white w-100 shadow-2"
		          		style = {{ border: "solid 1px", borderRadius: "5px", borderColor: "white", color: "white", margin: "10px auto"}}
		          		onChange = { this.onBedroomAbvGrChange }
		          	/>
				</div>

				<div className = "InputContainer">
					<label className = "db fw6 lh-copy f5" htmlFor = "KitchenAbvGr"> Kitchens above grade [0-3] </label>
        			<input 
						type = "text" 
		          		name = "KitchenAbvGr" 
		          		id = "KitchenAbvGr" 
		          		className="pa2 input-reset ba bg-transparent hover-bg-purple hover-white w-100 shadow-2"
		          		style = {{ border: "solid 1px", borderRadius: "5px", borderColor: "white", color: "white", margin: "10px auto"}}
		          		onChange = { this.onKitchenAbvGrChange }
		          	/>
				</div>

				<div className = "InputContainer">
					<label className = "db fw6 lh-copy f5" htmlFor = "ScreenPorch"> Screen porch area in square feet [0-480] </label>
        			<input 
						type = "text" 
		          		name = "ScreenPorch" 
		          		id = "ScreenPorch" 
		          		className="pa2 input-reset ba bg-transparent hover-bg-purple hover-white w-100 shadow-2"
		          		style = {{ border: "solid 1px", borderRadius: "5px", borderColor: "white", color: "white", margin: "10px auto"}}
		          		onChange = { this.onScreenPorchChange }
		          	/>
				</div>
			</div>
		)
	}
}

export default FormsPg12;