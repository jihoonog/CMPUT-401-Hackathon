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
        
    
      </div>
      <div className="chart">
        <Charts/>
      </div>
      {/*<Charts/>*/}
      <ListComponent/>
    </div>
  );
}

export default App;
