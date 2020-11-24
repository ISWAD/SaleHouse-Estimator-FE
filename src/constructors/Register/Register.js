import React, {Component} from 'react';
import { TransitionGroup, CSSTransition } from "react-transition-group";

import './Register.css';

const initialState = {
  firstName: '',
  lastName: '',
  email: '',
  password: '',
  isLoading: false
};

let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

let emails = [];

class Register extends Component {

  
  constructor(props){
    super(props);
    this.state = initialState;
    this.registerServer = `${this.props.appServer}/register`;
    this.profileServer = `${this.props.appServer}/mail`;
  }

  componentDidMount(){
   fetch(this.profileServer)
    .then(response => response.json())
    .then(function(response) {
      emails = [];
      response.map((res) => {
        return emails.push(res['email']);
      });
    });
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
    let newMsg = [];
    let validMail = true;
    this.props.removeAlert();
    let thenThis = this;
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    this.setState({isLoading: true});
    document.getElementsByClassName("Wait")[0].style.height = "100px";
    newMsg.push("Please wait while your information is being processed!");
    this.props.alertMsgChanged(newMsg);
    newMsg = [];
    if (! re.test(this.state.email)) {
      validMail = false;
      newMsg.push("Please enter a valid email address.");
    }
    if (this.state.firstName !== '' && this.state.lastName !== '' && this.state.email !== '' && this.state.password !== '' && validMail) {
      fetch(this.registerServer, {
        method: 'post',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
          firstName: this.state.firstName,
          lastName: this.state.lastName,
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
          newMsg.push("Email address " + thenThis.state.email + " has already been registered.");
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