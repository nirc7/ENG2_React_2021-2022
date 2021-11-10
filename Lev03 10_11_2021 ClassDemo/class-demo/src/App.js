import logo from './logo.svg';
import './App.css';
import FCPerson from './FunctionalComps/FCPerson';
import CCStudent from './ClassComp/CCStudent';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <CCStudent grade={99}/>
        <CCStudent grade={100}/>
        <FCPerson id={7} name={"avi"} />
        <FCPerson id={8} name={"benny"} />
      </header>
    </div>
  );
}

export default App;
