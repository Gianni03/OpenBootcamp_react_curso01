// Hooks useState 
// useContext sirven para trabajor con datos, utilizar el contexto para paso a componentes inferiores

import React, { useState, useContext } from 'react';


/**
 * @returns componente1
 * dispone de un contexto q va a tener un val q recibe desde el padre
 */
// inicializamos un estado vacio q va a rellenarse con los datos del padre
const miContexto = React.createContext(null)

const Componente1 = () => {

  const state = useContext(miContexto);

  return (
    <div>
    <h1>El token es: {state.token}</h1>
      <Componente2></Componente2>
    </div>
  );
}



const Componente2 = () => {

  const state = useContext(miContexto);

  return (
    <div>
      <h2>La sesión es: {state.sesion}</h2>    
    </div>
  );
}



export default function MiComponenteConContexto() {

  const estadoInicial = {
    token: '1234567',
    sesion: 1
  }

// creamos estado de este componente
const [sesionData, setSesionData] = useState(estadoInicial);

function actualizarSesion(){
  setSesionData(
    {
      token: 'jwq34562',
      sesion: sesionData.sesion + 1
    }
  );
}


  return (
    <miContexto.Provider value={sesionData}>
      {/* todo lo q este aqui dentro puede leer los datos de sesionData */}
      {/* si se actualiza los componente de aqui tambien lo actualizan */}
      <h1>ejemplo de useState y useContext</h1>
      <Componente1></Componente1>
      <button onClick={actualizarSesion}>Actualizar sesion</button>
    </miContexto.Provider>
  )
}


