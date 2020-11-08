import React, {Component} from 'react';
import './Register.css';

const users = [
                {
                  firstName: "Mohammad",
                  lastName: "Mohajer",
                  email: "mmmohajer70@gmail.com",
                  password: "123456"
                },
                {
                  firstName: "Amin",
                  lastName: "Nouri",
                  email: "am_nouri@gmail.com",
                  password: "78910"
                }
              ];

const initialState = {
                      firstName: '',
                      lastName: '',
                      email: '',
                      password: '',
                      alertMsg: ''
                     }

let emails = users.map((user) => {
              return user.email;
             })

let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

class Register extends React.Component {

  
  constructor(props){
    super(props);
    this.state = initialState;
  }

  onFNameChange = (event) => {
    this.setState({firstName: event.target.value});
    this.props.removeAlert();
  }

  onLNameChange = (event) => {
    this.setState({lastName: event.target.value});
    this.props.removeAlert();
  }

  onEmailChange = (event) => {
    this.setState({email: event.target.value});
    this.props.removeAlert();
    let newMsg = [];
    if (emails.includes(event.target.value)){
      newMsg.push("Email address " + event.target.value + " has already been registered.");
      this.props.alertMsgChanged(newMsg);
    } else if (! re.test(event.target.value)){
      newMsg.push("Please enter a valid email address.");
    } else {
      this.props.removeAlert();
    }
    if (newMsg.length > 0) {
      this.props.alertMsgChanged(newMsg);
    }
  }

  onPasswordChange = (event) => {
    this.setState({password: event.target.value});
    this.props.removeAlert();
  }

  onRegisterClick = () => {
    this.props.removeAlert();
    let validEmail = true;
    let fstEmail = true;
    let fieldsFilled = true; 
    let newMsg = [];
    if (emails.includes(this.state.email)){
      fstEmail = false;
      newMsg.push('Email address ' + this.state.email + ' has already been registered.');
    }
    if (! re.test(this.state.email)){
      validEmail = false;
      newMsg.push("Please enter a valid email address.");
    }
    if (this.state.firstName === '' || this.state.lastName === '' || this.state.email === '' || this.state.password === '') {
      fieldsFilled = false;
      newMsg.push("Please fill all the required fields.");
    }
    if (newMsg.length > 0) {
      this.props.alertMsgChanged(newMsg);
    }
    if (validEmail && fstEmail && fieldsFilled) {
      this.props.onRouteChange('My Account');
      this.props.onLoadUser();
    }
  }

  render() {
    
    return(
      <div>
        <div className = "FormContainer">
        <div className = "InputContainer">
        <label className = "db fw6 lh-copy f5" htmlFor = "firstname"> First Name </label>
        <input 
          type = "text" 
          name = "firstname" 
          id = "firstname" 
          className="pa2 input-reset ba bg-transparent hover-bg-purple hover-white w-100 shadow-2"
          style = {{ border: "solid 1px", borderRadius: "5px", borderColor: "white", color: "white", margin: "10px auto"}}
          onChange = { this.onFNameChange }
        />
        </div>

        <div className = "InputContainer">
        <label className = "db fw6 lh-copy f5" htmlFor = "lastname"> Last Name </label>
        <input 
          type = "text" 
          name = "lastname" 
          id = "lastname" 
          className="pa2 input-reset ba bg-transparent hover-bg-purple hover-white w-100 shadow-2"
          style = {{ border: "solid 1px", borderRadius: "5px", borderColor: "white", color: "white", margin: "10px auto"}}
          onChange = { this.onLNameChange }
        />
        </div>

        <div className = "InputContainer">
        <label className = "db fw6 lh-copy f5" htmlFor = "email"> Email </label>
        <input 
          type = "email" 
          name = "email" 
          id = "email" 
          className="pa2 input-reset ba bg-transparent hover-bg-purple hover-white w-100 shadow-2"
          style = {{ border: "solid 1px", borderRadius: "5px", borderColor: "white", color: "white", margin: "10px auto"}}
          onChange = { this.onEmailChange }
        />
        </div>

        <div className = "InputContainer">
        <label className = "db fw6 lh-copy f5" htmlFor = "password"> Password </label>
        <input 
          type = "password" 
          name = "password" 
          id = "password" 
          className="pa2 input-reset ba bg-transparent hover-bg-purple hover-white w-100 shadow-2"
          style = {{ border: "solid 1px", borderRadius: "5px", borderColor: "white", color: "white", margin: "10px auto"}}
          onChange = { this.onPasswordChange }
        />
        </div>
        </div>
        <input
          className="b ph3 pv2 input-reset ba b--black bg-transparent pointer f5 dib btnScale shadow-2 hover-bg-purple SubmitBtn"
          type="submit"
          value="Register"
          style = {{ color: "white", borderColor: "white", borderRadius: "10px", border: "solid 1px" }}
          onClick = { this.onRegisterClick }
        /> 
      </div>
    )

  }
}

export default Register;