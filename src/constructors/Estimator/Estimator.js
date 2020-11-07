import React, {Component} from 'react';
import Pagination from '../../components/Pagination/Pagination.js';
import Alert from '../../components/Alert/Alert.js';
import Forms from '../../components/Forms/Forms.js';

class Estimator extends React.Component {
  
  constructor(){
    super();
  }

  render() {
    
    return(
      <div>
        <div>
          <Alert />
          <Pagination />
        </div>
        <Forms />
      </div>
    )

  }
}

export default Estimator;