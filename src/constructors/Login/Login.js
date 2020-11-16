import React, {Component} from 'react';

const initialState = {
                      email: '',
                      password: ''
};


class Login extends Component {
  
  constructor(props){
    super(props);
    this.state = initialState;
    this.loginServer = `${this.props.appServer}/login`;
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
    const thenThis = this;
    if (this.state.email !== '' && this.state.password !== '') {
      fetch(this.loginServer, {
        method: 'post',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
          email: this.state.email,
          password: this.state.password
        })
      })
      .then(response => response.json())
      .then(function(response) {
        if (response.id) {
          thenThis.props.onLoadUser(response.id, response.firstname, response.commentsnum);
          thenThis.props.onRouteChange('My Account');
        } else {
          newMsg.push("Email or password you have entered is not correct.");
          thenThis.props.alertMsgChanged(newMsg);
        }
      })
      .catch(err => {
        newMsg.push("Something is wrong, please try again!");
        thenThis.props.alertMsgChanged(newMsg);
      })
    } else {
      newMsg.push("Please fill all the required fields.");
      this.props.alertMsgChanged(newMsg);
    }
  }

  render() {
    
    return(
      <div className = "dialog">
        
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