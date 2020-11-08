import React, {Component} from 'react';

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
                      email: '',
                      password: ''
};

let emails = users.map((user) => {
              return user.email;
             });

let passwords = users.map((user) => {
              return user.password;
             });



class Login extends React.Component {
  
  constructor(props){
    super(props);
    this.state = initialState;
  }

  onEmailChange = (event) => {
    this.props.removeAlert();
    this.setState({email: event.target.value});
  }

  onPasswordChange = (event) => {
    this.props.removeAlert();
    this.setState({password: event.target.value});
  }

  onLoginClick = () => {
    this.props.removeAlert();
    let newMsg = [];
    let verifiedMail = true;
    let verifiedPass = true;
    let fieldsFilled = true;
    if (this.state.email === '' || this.state.password === ''){
      fieldsFilled = false;
    }
    if (! emails.includes(this.state.email)) {
      verifiedMail = false;
    }
    if (fieldsFilled && verifiedMail) {
      let userIdx = emails.indexOf(this.state.email);
      if (passwords[userIdx] !== this.state.password) {
        verifiedPass = false;
      }
    }
    if (! fieldsFilled) {
      newMsg.push("Please fill all the required fields.");
    }
    if (fieldsFilled) {
      if (! verifiedMail || ! verifiedPass) {
        newMsg.push("Email or password you have entered is not correct.");
      } else {
        this.props.onRouteChange('My Account');
        this.props.onLoadUser();
      }
    }
    if (newMsg.length > 0) {
      this.props.alertMsgChanged(newMsg);
    }
  }

  render() {
    
    return(
      <div>
        
        <div className = "FormContainer">
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
          value="Login"
          style = {{ color: "white", borderColor: "white", borderRadius: "10px", border: "solid 1px" }}
          onClick = { this.onLoginClick }
        /> 
      </div>
    )

  }
}

export default Login;