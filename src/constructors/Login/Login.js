import React, {Component} from 'react';
import { TransitionGroup, CSSTransition } from "react-transition-group";

const initialState = {
                      email: '',
                      password: '',
                      isLoading: false
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
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    this.setState({isLoading: true});
    document.getElementsByClassName("Wait")[0].style.height = "100px";
    newMsg.push("Please wait while your information is being processed!");
    this.props.alertMsgChanged(newMsg);
    newMsg = [];
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
        thenThis.setState({isLoading: false});
        document.getElementsByClassName("Wait")[0].style.height = "0px";
        if (response.id) {
          thenThis.props.onLoadUser(response.id, response.firstname, response.commentsnum);
          thenThis.props.onRouteChange('My Account');
        } else {
          newMsg.push("Email or password you have entered is not correct.");
          thenThis.props.alertMsgChanged(newMsg);
        }
      })
      .catch(err => {
        thenThis.setState({isLoading: false});
        document.getElementsByClassName("Wait")[0].style.height = "0px";
        newMsg.push("Something is wrong, please try again!");
        thenThis.props.alertMsgChanged(newMsg);
      })
    } else {
      thenThis.setState({isLoading: false});
      document.getElementsByClassName("Wait")[0].style.height = "0px";
      newMsg.push("Please fill all the required fields.");
      this.props.alertMsgChanged(newMsg);
    }
  }

  render() {
    
    return(
      <div className = "dialog">
        
        <div className = "FormContainer">

        <div className = "Wait">
          <TransitionGroup component={null}>
            {this.state.isLoading && (
              <CSSTransition classNames="LoadingAnim" timeout={500}>
                <div className = "isLoad" style = {{backgroundColor: "transparent", color: "white", borderColor: "white"}}>
                  Wait!
                </div>
              </CSSTransition>
            )}
          </TransitionGroup>
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
          value="Login"
          style = {{ color: "white", borderColor: "white", borderRadius: "10px", border: "solid 1px" }}
          onClick = { this.onLoginClick }
        /> 
      </div>
    )

  }
}

export default Login;