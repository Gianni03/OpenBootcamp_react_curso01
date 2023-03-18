import logo from './logo.svg';
import './App.css';
import Greeting from './components/pure/Greeting';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
        <Greeting name="Gianni"></Greeting>
        
      </header>
    </div>
  );
}

export default App;
