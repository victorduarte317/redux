import React, { useState } from 'react';
import './App.css';

import cardCSS from './components/css/Card.css';
import Range from './components/Range';
import AA from './components/AA';
import Add from './components/Add';
import Sort from './components/Sort';

function App() {

  return (
    <div className="App">
      <h1>React-Redux exercises</h1>
      
      <div className="line">
        <Range></Range>
      </div>

      <div className="line">
        <AA></AA>
        <Add></Add>
        <Sort></Sort>
      </div>

    </div>
  );
}

export default App;
