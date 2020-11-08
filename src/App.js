import React, {Component} from 'react';
import ParticlesBg from "particles-bg";
import Frame from "./components/Frame/Frame.js";
import Logo from './components/Logo/Logo.js';
import Nav from './components/Nav/Nav.js';
import MobNav from './components/MobNav/MobNav.js';
import Alert from './components/Alert/Alert.js';
import Register from './constructors/Register/Register.js';
import Login from './constructors/Login/Login.js';
import Account from './constructors/Account/Account.js';
import Estimator from './constructors/Estimator/Estimator.js';
import './App.css';

let config = {
  num: [2, 4],
  rps: 0.1,
  radius: [5, 40],
  life: [1.5, 3],
  v: [2, 3],
  tha: [-40, 40],
  alpha: [0.6, 0],
  scale: [.1, 0.25],
  position: "all",
  color: ["random", "#ffcccc"],
  cross: "dead",
  // emitter: "follow",
  random: 15
};

if (Math.random() > 0.85) {
  config = Object.assign(config, {
    onParticleUpdate: (ctx, particle) => {
      ctx.beginPath();
      ctx.rect(
        particle.p.x,
        particle.p.y,
        particle.radius * 2,
        particle.radius * 2
        );
      ctx.fillStyle = particle.color;
      ctx.fill();
      ctx.closePath();
    }
  });
}

const initialState = {
                      width: 0, 
                      height: 0, 
                      user_loggedIn: false, 
                      pageIn: "Estimator",
                      mobNavShow: false,
                      alertMsg: []
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
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }

  updateWindowDimensions() {
    this.setState({ width: window.innerWidth, height: window.innerHeight });
  }

  onNavClick = (event) => {
    this.setState({pageIn: event.target.innerHTML});
    this.setState({mobNavShow: false});
    if (event.target.innerHTML.trim() === "Logout"){
      this.setState({user_loggedIn: false});
      this.setState({pageIn: "Estimator"});
    }
    this.removeAlert();
  }

  onMobNavButtonClick = (event) => {
    if (this.state.mobNavShow){
      this.setState({mobNavShow: false});
    } else{
      this.setState({mobNavShow: true});
    }
  }

  onRouteChange = (Route) => {
    this.setState({pageIn: Route})
  }

  onLoadUser = () => {
    this.setState({user_loggedIn: true});
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

  render() {
    return(
      <div>
      <div className = "HeadPart">
        <ParticlesBg type="custom" config={config} bg={true} />
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
      <div className = "MainPart shadow-2">
      {this.state.pageIn.trim() === "Estimator" &&
        <Estimator alertMsg = { this.state.alertMsg }/>
      }
      {this.state.pageIn.trim() === "Register" &&
        <Register 
          onRouteChange = { this.onRouteChange } 
          alertMsgChanged = { this.alertMsgChanged } 
          removeAlert = { this.removeAlert }
          onLoadUser = { this.onLoadUser}
        />
      }
      {this.state.pageIn.trim() === "Login" &&
        <Login 
          onRouteChange = { this.onRouteChange }
          alertMsgChanged = { this.alertMsgChanged } 
          removeAlert = { this.removeAlert }
          onLoadUser = { this.onLoadUser}
        />
      }
      {this.state.pageIn.trim() === "My Account" &&
        <Account />
      }
      {this.state.alertMsg.length > 0 &&
      <Alert alertMsg = { this.state.alertMsg }/>
      }
      </div>
      </div>
    )
  }

}

export default App;
