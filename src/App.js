import React, {Component} from 'react';
import { TransitionGroup, CSSTransition } from "react-transition-group";

import Frame from "./components/Frame/Frame.js";
import Logo from './components/Logo/Logo.js';
import Nav from './components/Nav/Nav.js';
import MobNav from './components/MobNav/MobNav.js';
import Welcome from './components/Welcome/Welcome.js';
import Alert from './components/Alert/Alert.js';
import Footer from './components/Footer/Footer.js';
import Register from './constructors/Register/Register.js';
import Login from './constructors/Login/Login.js';
import Account from './constructors/Account/Account.js';
import Estimator from './constructors/Estimator/Estimator.js';
import './App.css';


// const appServer = `http://localhost:4000`;
const appServer = `https://salehouse-server.herokuapp.com`;

const initialState = {
                      width: 0, 
                      height: 0, 
                      user_loggedIn: false, 
                      mobNavShow: false,
                      alertMsg: [],
                      estimatorIsOpen: false,
                      registerIsOpen: false,
                      loginisOpen: false,
                      accountIsOpen: false,
                      isWelcomePgOpen: true,
                      pageIn: "Welcome",
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
      this.onWelcomeClose();
      setTimeout(() => this.setState({ 
        estimatorIsOpen: true,
        registerIsOpen: false,
        loginIsOpen: false,
        accountIsOpen: false,
        isWelcomePgOpen: false,
        pageIn: 'Estimator' }), 
      1000);
    } else if (Route === 'Register') {
      this.onEstimatorClose();
      this.onLoginClose();
      this.onAccountClose();
      this.onWelcomeClose();
      setTimeout(() => this.setState({ 
        estimatorIsOpen: false,
        registerIsOpen: true,
        loginIsOpen: false,
        accountIsOpen: false,
        isWelcomePgOpen: false,
        pageIn: 'Register' }), 
      1000);
    } else if (Route === 'Login') {
      this.onEstimatorClose();
      this.onRegisterClose();
      this.onAccountClose();
      this.onWelcomeClose();
      setTimeout(() => this.setState({ 
        estimatorIsOpen: false,
        registerIsOpen: false,
        loginIsOpen: true,
        accountIsOpen: false,
        isWelcomePgOpen: false,
        pageIn: 'Login' }), 
      1000);
    } else if (Route === 'My Account') {
      this.onEstimatorClose();
      this.onRegisterClose();
      this.onLoginClose();
      this.onWelcomeClose();
      setTimeout(() => this.setState({ 
        estimatorIsOpen: false,
        registerIsOpen: false,
        loginIsOpen: false,
        accountIsOpen: true,
        isWelcomePgOpen: false,
        pageIn: 'My Account' }), 
      1000);
    }
  }

  onNavClick = (event) => {
    let pageIn = event.target.innerHTML.trim();
    document.getElementsByClassName("HeadPart")[0].style = "150px";
    this.onRouteChange(pageIn);
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
      document.getElementsByClassName("HeadPart")[0].classList.remove("mobBotOpened");
      document.getElementsByClassName("HeadPart")[0].classList.add("mobBotClosed");
    } else{
      document.getElementsByClassName("HeadPart")[0].classList.remove("mobBotClosed");
      document.getElementsByClassName("HeadPart")[0].classList.add("mobBotOpened");
      this.setState({mobNavShow: true});
    }
  }

  onBodyClick = (event) => {
    if (this.state.mobNavShow) {
      this.setState({mobNavShow: false});
      document.getElementsByClassName("HeadPart")[0].classList.remove("mobBotOpened");
      document.getElementsByClassName("HeadPart")[0].classList.add("mobBotClosed");
    } 
  }

  onWlcomeBtnClick = (event) => {
    this.onRouteChange("Estimator");
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
    this.setState({alertMsg: curMsgs});
    document.getElementsByClassName("AlertPlace")[0].classList.remove("AlertClosed");
    document.getElementsByClassName("AlertPlace")[0].classList.add("AlertOpened");
  }

  removeAlert = () => {
    if (this.state.alertMsg.length > 0) {
      this.setState({alertMsg: []});
      document.getElementsByClassName("AlertPlace")[0].classList.remove("AlertOpened");
      document.getElementsByClassName("AlertPlace")[0].classList.add("AlertClosed");
    }
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

  onWelcomeClose = () => {
    this.setState({isWelcomePgOpen: false});
  }

  render() {
    return(
      <div onClick = { this.onBodyClick }>
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
        {this.state.isWelcomePgOpen && (
          <CSSTransition classNames="dialog" timeout={1000}>
            <Welcome onWlcomeBtnClick = { this.onWlcomeBtnClick }/>
            </CSSTransition>
        )}
      </TransitionGroup>

      <div className = "AlertPlace">
      <TransitionGroup component={null}>
        {this.state.alertMsg.length > 0 && (
          this.state.alertMsg.map((msg, idx) => {
            return(
               <CSSTransition classNames="alertAnim" timeout={1000}>
               <Alert alertMsg = { msg } key = { idx }/>
               </CSSTransition>
            )
          })
        )}
      </TransitionGroup>
      </div>
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
