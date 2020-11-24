import React, {Component} from 'react';
import { TransitionGroup, CSSTransition } from "react-transition-group";


class Account extends Component {
  
  constructor(props){
    super(props);
    this.state = {
      userCommentsNum: this.props.userCommentsNum,
      userComment: '',
      isLoading: false
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
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    this.setState({isLoading: true});
    document.getElementsByClassName("Wait")[0].style.height = "100px";
    newMsg.push("Please wait while your comment is being sent!");
    this.props.alertMsgChanged(newMsg);
    newMsg = [];
    if (this.state.userComment !== '') {
      fetch(this.commentServer, {
        method: 'post',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
          userid: this.props.userId,
          commenttext: this.state.userComment
        })
      })
      .then(response => response.json())
      .then(function(response) {
        thenThis.setState({isLoading: false});
        document.getElementsByClassName("Wait")[0].style.height = "0px";
        newMsg.push("Thank you, your comment was successfully sent!");
        thenThis.props.alertMsgChanged(newMsg);
        thenThis.setState({userCommentsNum: response});
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
      <div className = "dialog FormContainer">
        
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