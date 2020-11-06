import React, {Component} from 'react';
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

        <label className = "db fw6 lh-copy f5" htmlFor = "cars"> Cars </label>
        <select 
          name="cars" 
          id="cars"
          className="pa2 ba bg-transparent hover-bg-purple hover-white w-100 shadow-2"
        >
          <option value="volvo">Volvo</option>
          <option value="saab">Saab</option>
          <option value="mercedes">Mercedes</option>
          <option value="audi">Audi</option>
        </select> 

      </div>
    )

  }
}

export default Estimator;