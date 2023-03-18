import logo from './logo.svg';
import './App.css';
import Greeting from './components/pure/Greeting';
import GreetingFunc from './components/pure/GreetingFunc';
import TaskListComponent from './components/container/task_list';
import ContactoListadoComponente from './components/container/ContactoListadoComponente';

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
        {/* <Greeting name="Gianni"></Greeting> */}
        {/* <GreetingFunc name="Gianni"></GreetingFunc> */}

        {/* componente de listado de tareas */}
        {/* <TaskListComponent></TaskListComponent> */}


        {/* ejercicio de las primeras clases */}
        <ContactoListadoComponente></ContactoListadoComponente>
      </header>
    </div>
  );
}

export default App;
