import React, {Component} from 'react';
import { TransitionGroup, CSSTransition } from "react-transition-group";

import Frame from "./components/Frame/Frame.js";
import Logo from './components/Logo/Logo.js';
import Nav from './components/Nav/Nav.js';
import MobNav from './components/MobNav/MobNav.js';
import Alert from './components/Alert/Alert.js';
import Footer from './components/Footer/Footer.js';
import Register from './constructors/Register/Register.js';
import Login from './constructors/Login/Login.js';
import Account from './constructors/Account/Account.js';
import Estimator from './constructors/Estimator/Estimator.js';
import bg from './statics/bg-img2.jpg';
import './App.css';


// const appServer = `http://localhost:4000`;
const appServer = `https://salehouse-server.herokuapp.com`;

const initialState = {
                      width: 0, 
                      height: 0, 
                      user_loggedIn: false, 
                      mobNavShow: false,
                      alertMsg: [],
                      estimatorIsOpen: true,
                      registerIsOpen: false,
                      loginisOpen: false,
                      accountIsOpen: false,
                      pageIn: "Estimator",
                      user: {
                        id: '',
                        name: '',
                        commentsNum: ''
                      }
                     }

class App extends Component {

  constructor() {
    super();
    this.state = initialState;
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
    document.getElementsByClassName("LoadPart")[0].style.display = "none";
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }

  updateWindowDimensions() {
    this.setState({ width: window.innerWidth, height: window.innerHeight });
  }

  onRouteChange = (Route) => {
    if (Route === 'Estimator') {
      this.onRegisterClose();
      this.onLoginClose();
      this.onAccountClose();
      setTimeout(() => this.setState({ 
        estimatorIsOpen: true,
        registerIsOpen: false,
        loginIsOpen: false,
        accountIsOpen: false,
        pageIn: 'Estimator' }), 
      1000);
    } else if (Route === 'Register') {
      this.onEstimatorClose();
      this.onLoginClose();
      this.onAccountClose();
      setTimeout(() => this.setState({ 
        estimatorIsOpen: false,
        registerIsOpen: true,
        loginIsOpen: false,
        accountIsOpen: false,
        pageIn: 'Register' }), 
      1000);
    } else if (Route === 'Login') {
      this.onEstimatorClose();
      this.onRegisterClose();
      this.onAccountClose();
      setTimeout(() => this.setState({ 
        estimatorIsOpen: false,
        registerIsOpen: false,
        loginIsOpen: true,
        accountIsOpen: false,
        pageIn: 'Login' }), 
      1000);
    } else if (Route === 'My Account') {
      this.onEstimatorClose();
      this.onRegisterClose();
      this.onLoginClose();
      setTimeout(() => this.setState({ 
        estimatorIsOpen: false,
        registerIsOpen: false,
        loginIsOpen: false,
        accountIsOpen: true,
        pageIn: 'My Account' }), 
      1000);
    }
  }

  onNavClick = (event) => {
    let pageIn = event.target.innerHTML.trim();
    this.onRouteChange(pageIn);
    document.getElementsByClassName("HeadPart")[0].style.height = "150px";
    this.setState({mobNavShow: false});
    if (pageIn === "Logout"){
      this.setState({user_loggedIn: false});
      this.onRouteChange("Estimator");
    }
    this.removeAlert();
  }

  onMobNavButtonClick = (event) => {
    if (this.state.mobNavShow){
      this.setState({mobNavShow: false});
      setTimeout(function(){document.getElementsByClassName("HeadPart")[0].style.height = "150px"}, 300);
    } else{
      setTimeout(function(){document.getElementsByClassName("HeadPart")[0].style.height = "250px"}, 300);
      this.setState({mobNavShow: true});
    }
  }

  onLoadUser = (userId, userName, userCommentsNum) => {
    this.setState({user_loggedIn: true});
    this.setState({user: {
      id: userId,
      name: userName,
      commentsNum: userCommentsNum
    }});
  }

  onSignOutUser = () => {
    this.setState({user_loggedIn: false});
  }

  alertMsgChanged = (msgs) => {
    let curMsgs = [];
    for (let i = 0; i < msgs.length; i++){
      curMsgs.push(msgs[i]);
    }
    this.setState({alertMsg: curMsgs})
  }

  removeAlert = () => {
    this.setState({alertMsg: []});
  }

  onEstimatorClose = () => {
    this.setState({estimatorIsOpen: false});
  }

  onRegisterClose = () => {
    this.setState({registerIsOpen: false});
  }

  onLoginClose = () => {
    this.setState({loginIsOpen: false});
  }

  onAccountClose = () => {
    this.setState({accountIsOpen: false});
  }

  render() {
    return(
      <div>
      <img className = "bg" src = {bg}/>
      <div className = "container">
      <div className = "HeadPart">
        <Frame>
          <Logo />
          {this.state.width >= 900 &&
            <Nav 
              user_loggedIn = { this.state.user_loggedIn }
              pageIn = { this.state.pageIn }  
              onNavClick = { this.onNavClick }
            />
          }
          {this.state.width < 900 &&
            <MobNav 
              user_loggedIn = { this.state.user_loggedIn }
              pageIn = { this.state.pageIn } 
              mobNavShow = { this.state.mobNavShow }
              onNavClick = { this.onNavClick } 
              onMobNavButtonClick = { this.onMobNavButtonClick }
            />
          }
        </Frame>
      </div>
      <div className = "MainPart">
      <TransitionGroup component={null}>
        {this.state.alertMsg.length > 0 && (
          <CSSTransition classNames="dialog" timeout={1000}>
            <Alert alertMsg = { this.state.alertMsg }/>
          </CSSTransition>
        )}
      </TransitionGroup>
      

      <TransitionGroup component={null}>
        {this.state.estimatorIsOpen && (
          <CSSTransition classNames="dialog" timeout={1000}>
            <Estimator 
              alertMsgChanged = { this.alertMsgChanged }
              removeAlert = { this.removeAlert }
            />
          </CSSTransition>
        )}
      </TransitionGroup>

      <TransitionGroup component={null}>
        {this.state.registerIsOpen && (
          <CSSTransition classNames="dialog" timeout={1000}>
            <Register 
              onRouteChange = { this.onRouteChange } 
              alertMsgChanged = { this.alertMsgChanged } 
              removeAlert = { this.removeAlert }
              onLoadUser = { this.onLoadUser}
              appServer = { appServer }
            />
          </CSSTransition>
        )}
      </TransitionGroup>
      
      <TransitionGroup component={null}>
        {this.state.loginIsOpen && (
          <CSSTransition classNames="dialog" timeout={1000}>
            <Login 
              onRouteChange = { this.onRouteChange }
              alertMsgChanged = { this.alertMsgChanged } 
              removeAlert = { this.removeAlert }
              onLoadUser = { this.onLoadUser}
              appServer = { appServer }
            />
          </CSSTransition>
        )}
      </TransitionGroup>
  
      <TransitionGroup component={null}>
        {this.state.accountIsOpen && (
          <CSSTransition classNames="dialog" timeout={1000}>
            <Account 
              appServer = { appServer }
              userId = {this.state.user.id}
              userName = {this.state.user.name}
              userCommentsNum = {this.state.user.commentsNum}
              removeAlert = { this.removeAlert }
              alertMsgChanged = { this.alertMsgChanged }
            />
          </CSSTransition>
        )}
      </TransitionGroup>

      </div>
      </div>
      <Footer />
      </div>
    )
  }

}

export default App;
