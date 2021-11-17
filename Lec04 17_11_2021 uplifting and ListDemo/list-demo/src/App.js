import logo from './logo.svg';
import './App.css';
import CCParent from './ClassComps/CCParent';
import CCListDemo from './ClassComps/CCListDemo';
import CCtar1 from './ClassComps/CCtar1';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <CCtar1 />
        <CCListDemo />
        <CCParent />
      </header>
    </div>
  );
}

export default App;
