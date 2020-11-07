import React, {Component} from 'react';
// import './Register.css';

class Account extends React.Component {
  
  constructor(){
    super();
  }

  render() {
    
    return(
      <div>
        <h1 className = "f5">
        Hi there, please share your experience about the app with us!
        </h1>

        
        <textarea  
          name = "comments" 
          id = "comments" 
          className="pa2 input-reset ba bg-transparent hover-bg-purple hover-white w-100 shadow-2"
          style = {{ border: "solid 1px", borderRadius: "5px", borderColor: "white", color: "white", margin: "10px auto", 
                     height: "200px", maxWidth: "90%", minWidth: "50%", minHeight: "100px", maxHeight: "300px"}}
        />

        <input
          className="b ph3 pv2 input-reset ba b--black bg-transparent pointer f5 dib btnScale shadow-2 hover-bg-purple SubmitBtn"
          type="submit"
          value="Submit"
          style = {{ color: "white", borderColor: "white", borderRadius: "10px", border: "solid 1px" }}
        /> 
      </div>
    )

  }
}

export default Account;