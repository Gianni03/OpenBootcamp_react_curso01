import logo from './logo.svg';
import './App.css';
import Greeting from './components/pure/Greeting';
import GreetingFunc from './components/pure/GreetingFunc';

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
        <Greeting name="Gianni"></Greeting>
        <GreetingFunc name="Gianni"></GreetingFunc>
        
      </header>
    </div>
  );
}

export default App;
