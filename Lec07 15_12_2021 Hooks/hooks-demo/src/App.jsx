import { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';


function App() {
  const [txtName, setTxtName] = useState('...');
  const [count, setCount] = useState(0)

  let stam = 'a';

  const btnAvi = () => {
    setTxtName('avi');
  }

  useEffect(() => {
    console.log('effect name=', txtName);
  })

  useEffect(() => {
    console.log(count);
  }, [count])

  const btnCount = () => {
    setCount(prevCount => prevCount + 1);

  }

  func1(){}

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        name={txtName} <br />
        <button onClick={btnAvi} >change 2 Avi</button> <br />
        count={count} <br />
        <button onClick={btnCount} >count++</button>

      </header>
    </div>
  );
}

export default App;
