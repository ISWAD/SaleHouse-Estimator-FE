import React, {Component} from 'react';


class Account extends React.Component {
  
  constructor(props){
    super(props);
    this.state = {
      userCommentsNum: this.props.userCommentsNum,
      userComment: ''
    };
    this.commentServer = `${this.props.appServer}/comment`;
  }

  onTextAreaChange = (event) => {
    this.props.removeAlert();
    this.setState({userComment: event.target.value});
  }

  onSubmitCommentClick = () => {
    let newMsg = [];
    let thenThis = this;
    if (this.state.userComment !== '') {
      fetch(this.commentServer, {
        method: 'post',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
          id: this.props.userId,
          commentsNum: this.state.userCommentsNum
        })
      })
      .then(response => response.json())
      .then(function(response) {
        thenThis.setState({userCommentsNum: response});
      })
      .catch(err => {
        newMsg.push("Something is wrong, please try again!");
        thenThis.props.alertMsgChanged(newMsg);
      })
    } else {
      newMsg.push("Please fill all the required fields.");
      this.props.alertMsgChanged(newMsg);
    }
  }

  render() {
    
    return(
      <div>
        <h1 className = "f5 shadow-2 Alert pa3" style = {{width: "90%"}}>
        Hi {this.props.userName}, you have shared {this.state.userCommentsNum} comments with us; please let us know more about your experience with our app.
        </h1>

        
        <textarea  
          name = "comments" 
          id = "comments" 
          className="pa2 input-reset ba bg-transparent hover-bg-purple hover-white w-100 shadow-2"
          style = {{ border: "solid 1px", borderRadius: "5px", borderColor: "white", color: "white", margin: "10px auto", 
                     height: "200px", maxWidth: "90%", minWidth: "50%", minHeight: "100px", maxHeight: "300px"}}
          onChange = { this.onTextAreaChange }
        />

        <input
          className="b ph3 pv2 input-reset ba b--black bg-transparent pointer f5 dib btnScale shadow-2 hover-bg-purple SubmitBtn"
          type="submit"
          value="Submit"
          style = {{ color: "white", borderColor: "white", borderRadius: "10px", border: "solid 1px" }}
          onClick = { this.onSubmitCommentClick }
        /> 
      </div>
    )

  }
}

export default Account;