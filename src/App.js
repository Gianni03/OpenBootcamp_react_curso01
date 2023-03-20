import logo from './logo.svg';
import './App.css';
// import Ejemplo4 from './hooks/ejemplo4';
// import MiComponenteConContexto from './hooks/ejemplo3';
// import Ejemplo2 from './hooks/ejemplo2';
// import Ejemplo1 from './hooks/ejemplo1';
// import Greeting from './components/pure/Greeting';
// import GreetingFunc from './components/pure/GreetingFunc';
// import TaskListComponent from './components/container/task_list';
// import GreetingStyled from './components/pure/GreetingStyled';
// import ContactoListadoComponente from './components/container/ContactoListadoComponente';

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
        {/* <ContactoListadoComponente></ContactoListadoComponente> */}

        {/* ej de uso de hooks */}
        {/* <Ejemplo1></Ejemplo1> */}
        {/* <Ejemplo2></Ejemplo2> */}
        {/* <MiComponenteConContexto></MiComponenteConContexto> */}
        {/* <Ejemplo4 nombre="Gianni">
        lo que este aqui dentro es tratado como props.chhildren
          <h3>este contenido es el children</h3>
        </Ejemplo4> */}

        {/* uso de estilos, css, scss, estilos en constantes */}
        {/* <GreetingStyled name="Gianni"></GreetingStyled> */}
      </header>
    </div>
  );
}

export default App;
