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

let me = false;

const initialState = {
                      firstName: '',
                      lastName: '',
                      email: '',
                      password: '',
                      alertMsg: ''
                     }

class Register extends React.Component {
  
  constructor(props){
    super(props);
    this.state = initialState;
  }

  onFNameChange = (event) => {
    this.setState({firstName: event.target.value});
  }

  onLNameChange = (event) => {
    this.setState({lastName: event.target.value});
  }

  onEmailChange = (event) => {
    this.setState({email: event.target.value});
    let emails = users.map((user) => {
                  return user.email;
                 })
    if (emails.includes(event.target.value)){
      this.props.alertMsgChanged('Email address ' + event.target.value + ' has already been registered.');
    } else {
      this.props.alertMsgChanged('');
      document.getElementsByClassName("Alert")[0].style.display = "none";
    }
  }

  onPasswordChange = (event) => {
    this.setState({password: event.target.value});
  }

  onRegisterClick = () => {
    let emails = users.map((user) => {
                  return user.email;
                 })
    if (emails.includes(this.state.email)){
      this.props.alertMsgChanged('Email address ' + this.state.email + ' has already been registered.');
    } else {
      this.props.onRouteChange('My Account');
    }
  }

  render() {
    
    return(
      <div>
        <h1 className = "f3 main_h1">
        Register
        </h1>
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