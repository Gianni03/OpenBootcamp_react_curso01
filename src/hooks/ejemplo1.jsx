// ej de useState
// componente de tipo funcion y acceder a su estado privado a travez de un hook y ademaas poder modificarlo

import React, { useState } from 'react';



const Ejemplo1 = () => {
// vlor inicial para un contador
const valorInicial = 0;

// valor inicial para una persona
const personaInicial = {
  nombre: "Gianni",
  email: "giannipasquinelli@gmail.com"
};

// el valor inicial y persona inicial sean parte del estado del componenet para así poder gestionar su cambio para que se vea reflejado en la vista del componente
// const [nombrevar, funcion para cambiar] = useState(valorInicial)
const [contador, setContador] = useState(valorInicial);
const [persona, setPersona] = useState(personaInicial);

// func para actualizar el estado privado del contador
function incrementarContador() {
  // funcionParaCambiar(nuevo estado)
  setContador(contador + 1)
};

// funcion para actualizar el estado de persona
function actualizarPersona(){
  setPersona(
    {
      nombre: 'Pepe',
      email: 'pepe@gmail.com'
    }
  )
}

  return (
    <div>
      <h1>Ejemplo de UseState</h1>

      <h2>Contador: { contador }</h2>
      <h2>Datos de la persona</h2>
      <h3>Nombre: { persona.nombre }</h3>
      <h3>Email: { persona.email }</h3>

      <button onClick={incrementarContador}>Incrementar Contador</button>
      <button onClick={actualizarPersona}>Actualizar Persona</button>
    </div>
  );
}

export default Ejemplo1;

