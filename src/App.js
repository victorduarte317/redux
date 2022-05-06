import React, { useState } from 'react';
import './App.css';

import cardCSS from './components/css/Card.css';
import Range from './components/Range';
import AA from './components/AA';
import Add from './components/Add';
import Sort from './components/Sort';

function App() {

  const [min, setMin] = useState(1)
  const [max, setMax] = useState(10)


  return (
    <div className="App">
      <h1>React-Redux exercises</h1>
      
      <div className="line">
        <Range min={min} max={max}
          onMinChange={setMin} 
          onMaxChange={setMax}
        ></Range>
      </div>

      <div className="line">
        <AA min={min} max={max} title='Card 2' green>X </AA>
        <Add min={min} max={max}title='Card 3' blue>X</Add>
        <Sort min={min} max={max} title='Card 4' purple>X</Sort>
      </div>

    </div>
  );
}

export default App;
