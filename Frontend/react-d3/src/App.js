import React from 'react';
import './App.css';
import Charts from './Charts';
import ListComponent from './List';

function App() {
  return (
    <div className="App">
      <div className="header">
        <img src="./food-flat.png"></img>
        <span>Recipe Gang</span>
      </div>

      <div className="leftContainer">
        <h1 className="ingredientTitle">Ingredient</h1>
        <ul className="checkBox_list">
          <li><input className="checkbox" type="radio" name="radAnswer" />Fat</li>
          <li><input className="checkbox" type="radio" name="radAnswer"/>Protein</li>
          <li><input className="checkbox" type="radio" name="radAnswer"/>Calories</li>
          <li><input className="checkbox"type="radio" name="radAnswer"/>Carbohydrates</li>
          <li><input className="checkbox" type="radio" name="radAnswer"/>Sodium</li>
        </ul>

        <h1 className="minMax"> Top 10</h1>
        <ul className="checkBox_list">
          <li><input type="radio" name="radAnswer2" />Least</li>
          <li><input type="radio" name="radAnswer2"/>Most</li>
        </ul>

      </div>

    </div>
  );
}

export default App;
