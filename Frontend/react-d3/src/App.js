import React from 'react';
import './App.css';
var Component = React.Component;
var CanvasJSReact = require('./canvasjs.react');
var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

class App extends React.Component{
  render() {
		const options = {
			animationEnabled: true,
			exportEnabled: true,
			theme: "light2", //"light1", "dark1", "dark2"
			title:{
				text: "Simple Column Chart with Index Labels"
			},
			data: [{
				type: "column", //change type to bar, line, area, pie, etc
				//indexLabel: "{y}", //Shows y value on all Data Points
				indexLabelFontColor: "#5A5757",
				indexLabelPlacement: "outside",
				dataPoints: [
					{ x: 10, y: 71 },
					{ x: 20, y: 55 },
					{ x: 30, y: 50 },
					{ x: 40, y: 65 },
					{ x: 50, y: 71 },
					{ x: 60, y: 68 },
					{ x: 70, y: 38 },
					{ x: 80, y: 92, indexLabel: "Highest" },
					{ x: 90, y: 54 },
					{ x: 100, y: 60 },
					{ x: 110, y: 21 },
					{ x: 120, y: 49 },
					{ x: 130, y: 36 }
				]
			}]
		}
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
      <div className="chart">
        <CanvasJSChart options = {options}/>
       </div>
    </div>
  );
}
}
export default App;
