import React, {Component} from 'react';

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

const initialState = {
                      LotShape: '4',
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

  setLotShapeVal = (val) => {
    this.setState({LotShape: val});
  }

  setSaleTypeVal = (val) => {
    this.setState({SaleType: val});
  }

  setBsmtExposureVal = (val) => {
    this.setState({BsmtExposure: val});
  }

  setNeighborhoodVal = (val) => {
    this.setState({Neighborhood: val});
  }



  setFireplaceQuVal = (val) => {
    this.setState({FireplaceQu: val});
  }

  setPavedDriveVal = (val) => {
    this.setState({PavedDrive: val});
  }

  setSaleConditionVal = (val) => {
    this.setState({SaleCondition: val});
  }

  setExterior2ndVal = (val) => {
    this.setState({Exterior2nd: val});
  }


  setElectricalVal = (val) => {
    this.setState({Electrical: val});
  }

  setOverallQualVal = (val) => {
    this.setState({OverallQual: val});
  }

  setMasVnrTypeVal = (val) => {
    this.setState({MasVnrType: val});
  }

  setExterQualVal = (val) => {
    this.setState({ExterQual: val});
  }


  setBsmtCondVal = (val) => {
    this.setState({BsmtCond: val});
  }

  setCondition1Val = (val) => {
    this.setState({Condition1: val});
  }

  setHeatingQCVal = (val) => {
    this.setState({HeatingQC: val});
  }

  setGarageTypeVal = (val) => {
    this.setState({GarageType: val});
  }


  setBsmtFinType1Val = (val) => {
    this.setState({BsmtFinType1: val});
  }

  setOverallCondVal = (val) => {
    this.setState({OverallCond: val});
  }

  setBsmtQualVal = (val) => {
    this.setState({BsmtQual: val});
  }

  setKitchenQualVal = (val) => {
    this.setState({KitchenQual: val});
  }


  setCentralAirVal = (val) => {
    this.setState({CentralAir: val});
  }

  setFoundationVal = (val) => {
    this.setState({Foundation: val});
  }

  setFunctionalVal = (val) => {
    this.setState({Functional: val});
  }

  setHouseStyleVal = (val) => {
    this.setState({HouseStyle: val});
  }


  setMSZoningVal = (val) => {
    this.setState({MSZoning: val});
  }

  setExterior1stVal = (val) => {
    this.setState({Exterior1st: val});
  }

  setGarageFinishVal = (val) => {
    this.setState({GarageFinish: val});
  }


  setGrLivAreaVal = (val) => {
    this.setState({GrLivArea: val});
  }

  setGarageAreaVal = (val) => {
    this.setState({GarageArea: val});
  }

  setEnclosedPorchVal = (val) => {
    this.setState({EnclosedPorch: val});
  }

  setTotalBsmtSFVal = (val) => {
    this.setState({TotalBsmtSF: val});
  }


  setBsmtUnfSFVal = (val) => {
    this.setState({BsmtUnfSF: val});
  }

  setGarageCarsVal = (val) => {
    this.setState({GarageCars: val});
  }

  setBsmtFullBathVal = (val) => {
    this.setState({BsmtFullBath: val});
  }

  setYearBuiltVal = (val) => {
    this.setState({YearBuilt: val});
  }


  setMasVnrAreaVal = (val) => {
    this.setState({MasVnrArea: val});
  }

  setGarageYrBltVal = (val) => {
    this.setState({GarageYrBlt: val});
  }

  setLotAreaVal = (val) => {
    this.setState({LotArea: val});
  }

  setHalfBathVal = (val) => {
    this.setState({HalfBath: val});
  }


  setFireplacesVal = (val) => {
    this.setState({Fireplaces: val});
  }

  setLotFrontageVal = (val) => {
    this.setState({LotFrontage: val});
  }

  setBsmtFinSF1Val = (val) => {
    this.setState({BsmtFinSF1: val});
  }

  setYearRemodAddVal = (val) => {
    this.setState({YearRemodAdd: val});
  }


  setOpenPorchSFVal = (val) => {
    this.setState({OpenPorchSF: val});
  }

  setBedroomAbvGrVal = (val) => {
    this.setState({BedroomAbvGr: val});
  }

  setKitchenAbvGrVal = (val) => {
    this.setState({KitchenAbvGr: val});
  }

  setScreenPorchVal = (val) => {
    this.setState({ScreenPorch: val});
  }


  setWoodDeckSFVal = (val) => {
    this.setState({WoodDeckSF: val});
  }

  setFullBathVal = (val) => {
    this.setState({FullBath: val});
  }

  setTotRmsAbvGrdVal = (val) => {
    this.setState({TotRmsAbvGrd: val});
  }

  set2ndFlrSFVal = (val) => {
    this.setState({SecondFlrSF: val});
  }

  render() {
    
    return(
      <div className = "Forms dialog">
            <FormsPg1
              setLotShapeVal = { this.setLotShapeVal }
              setSaleTypeVal = { this.setSaleTypeVal }
              setBsmtExposureVal = { this.setBsmtExposureVal }
              setNeighborhoodVal = { this.setNeighborhoodVal }
            />
      </div>
    )

  }
}

export default Estimator;