import React, {Component} from 'react';
import Pagination from '../../components/Pagination/Pagination.js';

import FormsPg1 from '../APIForms/FormsPg1/FormsPg1.js';
import FormsPg2 from '../APIForms/FormsPg2/FormsPg2.js';
import FormsPg3 from '../APIForms/FormsPg3/FormsPg3.js';
import FormsPg4 from '../APIForms/FormsPg4/FormsPg4.js';
import FormsPg5 from '../APIForms/FormsPg5/FormsPg5.js';
import FormsPg6 from '../APIForms/FormsPg6/FormsPg6.js';
import FormsPg7 from '../APIForms/FormsPg7/FormsPg7.js';
import FormsPg8 from '../APIForms/FormsPg8/FormsPg8.js';
import FormsPg9 from '../APIForms/FormsPg9/FormsPg9.js';
import FormsPg10 from '../APIForms/FormsPg10/FormsPg10.js';
import FormsPg11 from '../APIForms/FormsPg11/FormsPg11.js';
import FormsPg12 from '../APIForms/FormsPg12/FormsPg12.js';
import FormsPg13 from '../APIForms/FormsPg13/FormsPg13.js';

import './Estimator.css';

let msgselect = "If your desired option is not in our list you can choose Other. However, if you inform us through your account we can better assist you!";
let msgtxt = "If your values are out of the range inside the brackets our app may not predicts well, in this case you are advised to inform us through your account so that we can assist you!";
let msgtxt2 = "For items that are not existing in your desired apartment, just enter 0!"

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
        curPage--;
      } else {
        curPage = 2;
      }
    } else if (btnClicked === "&gt;") {
      if (curPage < 2) {
        curPage++;
      } else {
        curPage = 1;
      }
    } else if (btnClicked === "&lt;&lt;") {
      curPage = 1;
    } else if (btnClicked === "&gt;&gt;") {
      curPage = 2;
    }
    if (curPage >= 2) {
      this.props.alertMsgChanged([msgtxt, msgtxt2]);
    } else {
      this.props.removeAlert();
    }
    this.setState({estPageIn: curPage});
  }

  onLot

  render() {
    
    return(
      <div className = "Forms">
          {this.state.estPageIn === 1 &&
            <div>
            <FormsPg1 />
            <FormsPg2 />
            <FormsPg3 />
            <FormsPg4 />
            <FormsPg5 />
            <FormsPg6 />
            <FormsPg7 />
            </div>
          }
          {this.state.estPageIn === 2 &&
            <div>
            <FormsPg8 />
            <FormsPg9 />
            <FormsPg10 />
            <FormsPg11 />
            <FormsPg12 />
            <FormsPg13 />
            </div>
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
          {this.state.estPageIn === 8 &&
            <FormsPg8 />
          }
          {this.state.estPageIn === 9 &&
            <FormsPg9 />
          }
          {this.state.estPageIn === 10 &&
            <FormsPg10 />
          }
          {this.state.estPageIn === 11 &&
            <FormsPg11 />
          }
          {this.state.estPageIn === 12 &&
            <FormsPg12 />
          }
          {this.state.estPageIn === 13 &&
            <FormsPg13 />
          }
        <Pagination estPageIn = { this.state.estPageIn } onPaginationClick = { this.onPaginationClick }/>
      </div>
    )

  }
}

export default Estimator;