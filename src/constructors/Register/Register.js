import React, {Component} from 'react';
import './Register.css';

class Register extends React.Component {
  
  constructor(){
    super();
  }

  render() {
    
    return(
      <div>
        <h1 className = "f3 main_h1">
        Register
        </h1>

        <label className = "db fw6 lh-copy f5" htmlFor = "firstname"> First Name </label>
        <input 
          type = "text" 
          name = "firstname" 
          id = "firstname" 
          className="pa2 input-reset ba bg-transparent hover-bg-purple hover-white w-100 shadow-2"
          style = {{ border: "solid 1px", borderRadius: "5px", borderColor: "white", color: "white", margin: "10px auto"}}
        />

        <label className = "db fw6 lh-copy f5" htmlFor = "lastname"> Last Name </label>
        <input 
          type = "text" 
          name = "lastname" 
          id = "lastname" 
          className="pa2 input-reset ba bg-transparent hover-bg-purple hover-white w-100 shadow-2"
          style = {{ border: "solid 1px", borderRadius: "5px", borderColor: "white", color: "white", margin: "10px auto"}}
        />

        <label className = "db fw6 lh-copy f5" htmlFor = "email"> Email </label>
        <input 
          type = "email" 
          name = "email" 
          id = "email" 
          className="pa2 input-reset ba bg-transparent hover-bg-purple hover-white w-100 shadow-2"
          style = {{ border: "solid 1px", borderRadius: "5px", borderColor: "white", color: "white", margin: "10px auto"}}
        />

        <label className = "db fw6 lh-copy f5" htmlFor = "password"> Password </label>
        <input 
          type = "password" 
          name = "password" 
          id = "password" 
          className="pa2 input-reset ba bg-transparent hover-bg-purple hover-white w-100 shadow-2"
          style = {{ border: "solid 1px", borderRadius: "5px", borderColor: "white", color: "white", margin: "10px auto"}}
        />

        <input
          className="b ph3 pv2 input-reset ba b--black bg-transparent pointer f5 dib btnScale shadow-2 hover-bg-purple"
          type="submit"
          value="Register"
          style = {{ width: "75%", color: "white", borderColor: "white", borderRadius: "10px", border: "solid 1px" }}
        /> 
      </div>
    )

  }
}

export default Register;