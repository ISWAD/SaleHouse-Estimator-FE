import React, {Component} from 'react';
import { Select, NativeSelect, InputLabel } from '@material-ui/core';
import './Estimator.css';

let estPages = [];

for (let i = 1; i <= 13; i++){
  estPages.push(i);
}

class Estimator extends React.Component {
  
  constructor(){
    super();
  }

  render() {
    
    return(
      <div>
        <div>
          <h1 className = "f5">
            Flash Alert
          </h1>
          <div>
            <ul className = "pageNum">
              {estPages.map((num, idx) => {
                return <li> { num } </li>
              })}
            </ul>
          </div>
          <div className = "Est_Arr">
            <div className = "f2"> &larr; </div>
            <div className = "f2"> &rarr; </div>
          </div>
        </div>

        <InputLabel htmlFor="select" className = "db fw6 lh-copy f5" style = {{ color: "white"}}>Age</InputLabel>
        <Select 
          id="select"
          className="pa2 input-reset ba bg-transparent hover-bg-purple hover-white w-100 shadow-2"
          style = {{ border: "solid 1px", borderRadius: "5px", borderColor: "white", color: "white", margin: "10px auto", textAlign: "left"}}
          defaultValue = "10"
        >
          <option 
            value="10"
            className="pa2 input-reset ba bg-transparent hover-bg-yellow hover-white w-100 shadow-2 f4"
            style = {{ border: "solid 1px", borderRadius: "5px", borderColor: "white", color: "black", margin: "10px auto",
                       textAlign: "center", width: "90%"}}
          >
          Ten
          </option>
          <option 
            value="20"
            className="pa2 input-reset ba bg-transparent hover-bg-yellow hover-white w-100 shadow-2 f4"
            style = {{ border: "solid 1px", borderRadius: "5px", borderColor: "white", color: "black", margin: "10px auto",
                       textAlign: "center", width: "90%"}}
          >
          Twenty
          </option>
        </Select>

      </div>
    )

  }
}

export default Estimator;