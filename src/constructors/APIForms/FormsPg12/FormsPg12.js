import React , {Component} from 'react';

const re = /^(\d+)?(\.)?(\d+)?$/;
const re2 = /^[.]?(\d+)?$/;

let OpenPorchSFval = '';
let BedroomAbvGrval = '';
let KitchenAbvGrval = '';
let ScreenPorchval = '';

class FormsPg12 extends Component{
	
	constructor(props){
		super(props);
	}

	onOpenPorchSFChange = (event) => {
		if (re.test(event.target.value) || re2.test(event.target.value)) {
			OpenPorchSFval = event.target.value;
			this.props.setOpenPorchSFVal(OpenPorchSFval);
		} else {
			document.getElementById("OpenPorchSF").value = OpenPorchSFval;
		}
	}

	onBedroomAbvGrChange = (event) => {
		if (re.test(event.target.value) || re2.test(event.target.value)) {
			BedroomAbvGrval = event.target.value;
			this.props.setBedroomAbvGrVal(BedroomAbvGrval);
		} else {
			document.getElementById("BedroomAbvGr").value = BedroomAbvGrval;
		}
	}

	onKitchenAbvGrChange = (event) => {
		if (re.test(event.target.value) || re2.test(event.target.value)) {
			KitchenAbvGrval = event.target.value;
			this.props.setKitchenAbvGrVal(KitchenAbvGrval);
		} else {
			document.getElementById("KitchenAbvGr").value = KitchenAbvGrval;
		}
	}

	onScreenPorchChange = (event) => {
		if (re.test(event.target.value) || re2.test(event.target.value)) {
			ScreenPorchval = event.target.value;
			this.props.setScreenPorchVal(ScreenPorchval);
		} else {
			document.getElementById("ScreenPorch").value = ScreenPorchval;
		}
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
		          		placeholder="Enter a number"
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
		          		placeholder="Enter a number"
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
		          		placeholder="Enter a number"
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
		          		placeholder="Enter a number"
		          		onChange = { this.onScreenPorchChange }
		          	/>
				</div>
			</div>
		)
	}
}

export default FormsPg12;