import React, {Component} from 'react';
import { TransitionGroup, CSSTransition } from "react-transition-group";

import APIForm from '../../components/APIForm/APIForm.js';
import './Estimator.css';

// const APIURL = `http://127.0.0.1:5000/`;
const APIURL = `https://concrete-estimator-api.herokuapp.com/`;

const re = /^(\d+)?(\.)?(\d+)?$/;
const re2 = /^[.]?(\d+)?$/;

let Cement = "";
let Slag = "";
let FlyAsh = "";
let Water = "";
let Superplasticizer = "";
let CA = "";
let FA = "";
let Age = "";

const initialState = {
                      Cement: '',
                      Slag: '',
                      FlyAsh: '',
                      Water: '',
                      Superplasticizer: '',
                      CA: '',
                      FA: '',
                      Age: '',
                      isLoading: false
                     }

class Estimator extends Component {
  
  constructor(){
    super();
    this.state = initialState;
  }

  onCementChange = (event) => {
    if (re.test(event.target.value) || re2.test(event.target.value)) {
      this.props.removeAlert();
      Cement = event.target.value;
      this.setState({Cement: event.target.value});
    } else {
      document.getElementById("Cement").value = Cement;
    }
  }

  onSlagChange = (event) => {
    if (re.test(event.target.value) || re2.test(event.target.value)) {
      this.props.removeAlert();
      Slag = event.target.value;
      this.setState({Slag: event.target.value});
    } else {
      document.getElementById("Slag").value = Slag;
    }
  }

  onFlyAshChange = (event) => {
    if (re.test(event.target.value) || re2.test(event.target.value)) {
      this.props.removeAlert();
      FlyAsh = event.target.value;
      this.setState({FlyAsh: event.target.value});
    } else {
      document.getElementById("FlyAsh").value = FlyAsh;
    }
  }

  onWaterChange = (event) => {
    if (re.test(event.target.value) || re2.test(event.target.value)) {
      this.props.removeAlert();
      Water = event.target.value;
      this.setState({Water: event.target.value});
    } else {
      document.getElementById("Water").value = Water;
    }
  }

  onSuperplasticizerChange = (event) => {
    if (re.test(event.target.value) || re2.test(event.target.value)) {
      this.props.removeAlert();
      Superplasticizer = event.target.value;
      this.setState({Superplasticizer: event.target.value});
    } else {
      document.getElementById("Superplasticizer").value = Superplasticizer;
    }
  }

  onCAChange = (event) => {
    if (re.test(event.target.value) || re2.test(event.target.value)) {
      this.props.removeAlert();
      CA = event.target.value;
      this.setState({CA: event.target.value});
    } else {
      document.getElementById("CA").value = CA;
    }
  }

  onFAChange = (event) => {
    if (re.test(event.target.value) || re2.test(event.target.value)) {
      this.props.removeAlert();
      FA = event.target.value;
      this.setState({FA: event.target.value});
    } else {
      document.getElementById("FA").value = FA;
    }
  }

  onAgeChange = (event) => {
    if (re.test(event.target.value) || re2.test(event.target.value)) {
      this.props.removeAlert();
      Age = event.target.value;
      this.setState({Age: event.target.value});
    } else {
      document.getElementById("Age").value = Age;
    }
  }

  onSubmitBtnClick = (event) => {
    this.props.removeAlert();
    let thenThis = this
    let newMsg = [];
    // document.body.scrollTop = 0;
    // document.documentElement.scrollTop = 0;
    this.scrollToTop();
    this.setState({isLoading: true});
    document.getElementsByClassName("Wait")[0].style.height = "100px";
    newMsg.push("Please wait while the data is being processed!");
    this.props.alertMsgChanged(newMsg);
    if (this.state.Cement !== "" && this.state.Water !== "" && this.state.Slag !== "" && this.state.FlyAsh !== "" &&
        this.state.Superplasticizer !== "" && this.state.CA !== "" && this.state.FA !== "" && this.state.Age !== "") {
      let WC = this.state.Water / this.state.Cement;
      let api_vec = [this.state.Slag, this.state.FlyAsh, this.state.Superplasticizer, this.state.CA, this.state.FA, this.state.Age, WC];
      fetch(APIURL, {
        method: 'post',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
          ApiVec: api_vec
        })
      })
      .then(response => response.json())
      .then(function(response) {
        newMsg = [];
        thenThis.setState({isLoading: false});
        document.getElementsByClassName("Wait")[0].style.height = "0px";
        newMsg.push(`The compressive strength of concrete is estimated to be <span class = 'APIRes'>${response['result']}</span> MPa!`);
        thenThis.props.alertMsgChanged(newMsg);
      })
      .catch(err => {
        newMsg = [];
        thenThis.setState({isLoading: false});
        document.getElementsByClassName("Wait")[0].style.height = "0px";
        newMsg.push("Something is wrong, please try again!");
        thenThis.props.alertMsgChanged(newMsg);
      })
    } else {
      newMsg = [];
      this.setState({isLoading: false});
      document.getElementsByClassName("Wait")[0].style.height = "0px";
      newMsg.push("Please fill all the required fields.");
      this.props.alertMsgChanged(newMsg);
    }
  }

  scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }

  render() {
    
    return(
      <div className = "Forms dialog">
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

        <APIForm
          onCementChange = { this.onCementChange }
          onSlagChange = { this.onSlagChange }
          onFlyAshChange = { this.onFlyAshChange }
          onWaterChange = { this.onWaterChange }
          onSuperplasticizerChange = { this.onSuperplasticizerChange }
          onCAChange = { this.onCAChange }
          onFAChange = { this.onFAChange }
          onAgeChange = { this.onAgeChange }
          onSubmitBtnClick = { this.onSubmitBtnClick }
        />
      </div>
    )

  }
}

export default Estimator;