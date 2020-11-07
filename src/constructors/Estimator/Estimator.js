import React, {Component} from 'react';
import Pagination from '../../components/Pagination/Pagination.js';
import Alert from '../../components/Alert/Alert.js';
import Forms from '../../components/Forms/Forms.js';

const initialState = {
                      estPageIn: 1 
                     }

class Estimator extends React.Component {
  
  constructor(){
    super();
    this.state = initialState;
  }

  onPaginationClick = (event) => {
    let curPage= this.state.estPageIn;
    let btnClicked = event.target.innerHTML.trim();
    if (btnClicked === "&lt;") {
      this.setState({estPageIn: curPage - 1});
    } else if (btnClicked === "&gt;") {
      this.setState({estPageIn: curPage + 1});
    } else if (btnClicked === "&lt;&lt;") {
      this.setState({estPageIn: 1});
    } else if (btnClicked === "&gt;&gt;") {
      this.setState({estPageIn: 13});
    }
    else {
      this.setState({estPageIn: Number(btnClicked)});
    }
  }

  render() {
    
    return(
      <div>
        <Alert />
        <Forms estPageIn = { this.state.estPageIn }/>
        <Pagination estPageIn = { this.state.estPageIn } onPaginationClick = { this.onPaginationClick }/>
      </div>
    )

  }
}

export default Estimator;