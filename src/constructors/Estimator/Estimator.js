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

let msgselect = "If your desired option is not in our list you can choose Other. However, if you inform us through your account we can better assist you!";
let msgtxt = "If your values are out of the range inside the brackets our app may not predicts well, in this case you are advised to inform us through your account so that we can assist you!";
let msgtxt2 = "For items that are not existing in your desired apartment, just enter 0";

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

  componentDidMount() {
    this.props.removeAlert();
    this.props.alertMsgChanged([msgselect, msgtxt, msgtxt2]);
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
      <div className = "Forms">
            <FormsPg1
              setLotShapeVal = { this.setLotShapeVal }
              setSaleTypeVal = { this.setSaleTypeVal }
              setBsmtExposureVal = { this.setBsmtExposureVal }
              setNeighborhoodVal = { this.setNeighborhoodVal }
            />
            <FormsPg2
              setFireplaceQuVal = { this.setFireplaceQuVal }
              setPavedDriveVal = { this.setPavedDriveVal }
              setSaleConditionVal = { this.setSaleConditionVal }
              setExterior2ndVal = { this.setExterior2ndVal }
           />
            <FormsPg3 
              setElectricalVal = { this.setFireplaceQuVal }
              setOverallQualVal = { this.setPavedDriveVal }
              setMasVnrTypeVal = { this.setSaleConditionVal }
              setExterQualVal = { this.setExterior2ndVal }
            />
            <FormsPg4
              setBsmtCondVal = { this.setBsmtCondVal }
              setCondition1Val = { this.setCondition1Val }
              setHeatingQCVal = { this.setHeatingQCVal }
              setGarageTypeVal = { this.setGarageTypeVal } 
            />
            <FormsPg5 
              setBsmtFinType1Val = { this.setBsmtFinType1Val }
              setOverallCondVal = { this.setOverallCondVal }
              setBsmtQualVal = { this.setBsmtQualVal }
              setKitchenQualVal = { this.setKitchenQualVal }
            />
            <FormsPg6 
              setCentralAirVal = { this.setCentralAirVal }
              setFoundationVal = { this.setFoundationVal }
              setFunctionalVal = { this.setFunctionalVal }
              setHouseStyleVal = { this.setHouseStyleVal }
            />
            <FormsPg7 
              setMSZoningVal = { this.setMSZoningVal }
              setExterior1stVal = { this.setExterior1stVal }
              setGarageFinishVal = { this.setGarageFinishVal }
            />

            <FormsPg8
              setGrLivAreaVal = { this.setGrLivAreaVal }
              setGarageAreaVal = { this.setGarageAreaVal }
              setEnclosedPorchVal = { this.setEnclosedPorchVal }
              setTotalBsmtSFVal = { this.setTotalBsmtSFVal }
            />
            <FormsPg9
              setBsmtUnfSFVal = { this.setBsmtUnfSFVal }
              setGarageCarsVal = { this.setGarageCarsVal }
              setBsmtFullBathVal = { this.setBsmtFullBathVal }
              setYearBuiltVal = { this.setYearBuiltVal }
            />
            <FormsPg10
              setMasVnrAreaVal = { this.setMasVnrAreaVal }
              setGarageYrBltVal = { this.setGarageYrBltVal }
              setLotAreaVal = { this.setLotAreaVal }
              setHalfBathVal = { this.setHalfBathVal } 
            />
            <FormsPg11
              setFireplacesVal = { this.setFireplacesVal }
              setLotFrontageVal = { this.setLotFrontageVal }
              setBsmtFinSF1Val = { this.setBsmtFinSF1Val }
              setYearRemodAddVal = { this.setYearRemodAddVal }
            />
            <FormsPg12
              setOpenPorchSFVal = { this.setOpenPorchSFVal }
              setBedroomAbvGrVal = { this.setBedroomAbvGrVal }
              setKitchenAbvGrVal = { this.setKitchenAbvGrVal }
              setScreenPorchVal = { this.setScreenPorchVal }
            />
            <FormsPg13
              setWoodDeckSFVal = { this.setWoodDeckSFVal }
              setFullBathVal = { this.setFullBathVal }
              setTotRmsAbvGrdVal = { this.setTotRmsAbvGrdVal }
              set2ndFlrSFVal = { this.set2ndFlrSFVal } 
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

export default Estimator;