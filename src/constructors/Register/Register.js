import React, {Component} from 'react';

const reg_questions = ["First Name", "Last Name", "Email", "Username", "Password"];

class Register extends React.Component {
  
  constructor(){
    super();
  }

  render() {
    
    return(
      <div>
      {reg_questions.map((item, i) => {
        return(
          <div>
          <label className = "db fw6 lh-copy f5" htmlFor = { item } key = { i }> {item} </label>
          <input 
            type = "text" 
            name = "name" 
            id = "name" 
            className="pa2 input-reset ba bg-transparent hover-bg-purple hover-white w-100"
            style = {{ border: "solid 1px", borderRadius: "5px", borderColor: "white", color: "white", margin: "10px auto"}}
          />
          </div>
        )
      })} 
      </div>
    )

  }
}

export default Register;


      // <input 
      //   className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
      //   type="text"
      //   name="name"
      //   id="name"
      // />  