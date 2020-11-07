import React, {Component} from 'react';
// import './Register.css';

class Login extends React.Component {
  
  constructor(){
    super();
  }

  render() {
    
    return(
      <div>
        <h1 className = "f3 main_h1">
        Login
        </h1>

        <div className = "FormContainer">
        <div className = "InputContainer">
        <label className = "db fw6 lh-copy f5" htmlFor = "email"> Email </label>
        <input 
          type = "email" 
          name = "email" 
          id = "email" 
          className="pa2 input-reset ba bg-transparent hover-bg-purple hover-white w-100 shadow-2"
          style = {{ border: "solid 1px", borderRadius: "5px", borderColor: "white", color: "white", margin: "10px auto"}}
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
        />
        </div>
        </div>

        <input
          className="b ph3 pv2 input-reset ba b--black bg-transparent pointer f5 dib btnScale shadow-2 hover-bg-purple SubmitBtn"
          type="submit"
          value="Login"
          style = {{ color: "white", borderColor: "white", borderRadius: "10px", border: "solid 1px" }}
        /> 
      </div>
    )

  }
}

export default Login;