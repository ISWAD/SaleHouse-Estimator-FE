import React, {Component} from 'react';
import Pagination from '../../components/Pagination/Pagination.js';
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
      if (curPage > 1) {
        this.setState({estPageIn: curPage - 1});
      } else {
        this.setState({estPageIn: 13});
      }
    } else if (btnClicked === "&gt;") {
      if (curPage < 13) {
        this.setState({estPageIn: curPage + 1});
      } else {
        this.setState({estPageIn: 1});
      }
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
        <Forms estPageIn = { this.state.estPageIn }/>
        <Pagination estPageIn = { this.state.estPageIn } onPaginationClick = { this.onPaginationClick }/>
      </div>
    )

  }
}

export default Estimator;