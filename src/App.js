import logo from './logo.svg';
import './App.css';

import Card from './components/Card';
import cardCSS from './components/css/Card.css';
import Range from './components/Range';

function App() {
  return (
    <div className="App">
      <h1>React-Redux exercises</h1>
      
      <div className="line">
        <Range>X</Range>
      </div>

      <div className="line">
        <Card title='Card 2' green>X</Card>
        <Card title='Card 3' blue>X</Card>
        <Card title='Card 4' purple>X</Card>
      </div>

    </div>
  );
}

export default App;
