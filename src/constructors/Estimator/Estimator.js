import React, {Component} from 'react';
import Pagination from '../../components/Pagination/Pagination.js';

import FormsPg1 from '../APIForms/FormsPg1/FormsPg1.js';
import FormsPg2 from '../APIForms/FormsPg2/FormsPg2.js';
import FormsPg3 from '../APIForms/FormsPg3/FormsPg3.js';
import FormsPg4 from '../APIForms/FormsPg4/FormsPg4.js';
import FormsPg5 from '../APIForms/FormsPg5/FormsPg5.js';
import FormsPg6 from '../APIForms/FormsPg6/FormsPg6.js';
import FormsPg7 from '../APIForms/FormsPg7/FormsPg7.js';

import './Estimator.css';

const initialState = {
                      estPageIn: 1,
                      LotShape: '',
                      GrLivArea: '',
                      GarageArea: '',
                      EnclosedPorch: '',
                      TotalBsmtSF: '',
                      BsmtUnfSF: '',
                      SaleType: '',
                      BsmtExposure: '',
                      Neighborhood: '',
                      FireplaceQu: '',
                      PavedDrive: '',
                      SaleCondition: '',
                      GarageCars: '',
                      Exterior2nd: '',
                      BsmtFullBath: '',
                      YearBuilt: '',
                      Electrical: '',
                      OverallQual: '',
                      MasVnrType: '',
                      ExterQual: '',
                      MasVnrArea: '',
                      BsmtCond: '',
                      GarageYrBlt: '',
                      LotArea: '',
                      HalfBath: '',
                      Fireplaces: '',
                      Condition1: '',
                      LotFrontage: '',
                      BsmtFinSF1: '',
                      HeatingQC: '',
                      YearRemodAdd: '',
                      OpenPorchSF: '',
                      BedroomAbvGr: '',
                      GarageType: '',
                      BsmtFinType1: '',
                      OverallCond: '',
                      BsmtQual: '',
                      KitchenQual: '',
                      CentralAir: '',
                      Foundation: '',
                      KitchenAbvGr: '',
                      Functional: '',
                      ScreenPorch: '',
                      HouseStyle: '',
                      WoodDeckSF: '',
                      MSZoning: '',
                      Exterior1st: '',
                      GarageFinish: '',
                      FullBath: '',
                      TotRmsAbvGrd: '',
                      SecondFlrSF: ''
                     }

class Estimator extends Component {
  
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
        this.setState({estPageIn: 26});
      }
    } else if (btnClicked === "&gt;") {
      if (curPage < 26) {
        this.setState({estPageIn: curPage + 1});
      } else {
        this.setState({estPageIn: 1});
      }
    } else if (btnClicked === "&lt;&lt;") {
      this.setState({estPageIn: 1});
    } else if (btnClicked === "&gt;&gt;") {
      this.setState({estPageIn: 26});
    }
  }

  render() {
    
    return(
      <div className = "Forms">
          {this.state.estPageIn === 1 &&
            <FormsPg1 />
          }
          {this.state.estPageIn === 2 &&
            <FormsPg2 />
          }
          {this.state.estPageIn === 3 &&
            <FormsPg3 />
          }
          {this.state.estPageIn === 4 &&
            <FormsPg4 />
          }
          {this.state.estPageIn === 5 &&
            <FormsPg5 />
          }
          {this.state.estPageIn === 6 &&
            <FormsPg6 />
          }
          {this.state.estPageIn === 7 &&
            <FormsPg7 />
          }
        <Pagination estPageIn = { this.state.estPageIn } onPaginationClick = { this.onPaginationClick }/>
      </div>
    )

  }
}

export default Estimator;