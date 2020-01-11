import React from 'react';
import './App.css';
import Charts from './Charts';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src='food-flat.png' width='60'/>
        <h3>Recipe Gang</h3>
      </header>
      <Charts/>
    </div>
  );
}

export default App;