// ejemplo de
//  useState, 
// useEffec, para controlar cambios en la vista y para el ciclo de vida del comp
// useRef para referenciar elementos dentro de la vista

import React, { useState, useRef, useEffect} from 'react';

const Ejemplo2 = () => {

  // dos contadores, cada uno en un estado diferente
  const [contador1, setContador1] = useState(0);
  const [contador2, setContador2] = useState(0);

  // crear una referecia para asociar una var con un elem del dom
  // simplifica el uso de querySelector y getElementById
  const miRef = useRef();

  function incrementar1(){
    setContador1(contador1 + 1)
  }

  function incrementar2(){
    setContador2(contador2 + 1)
  }

  // caracteristicas del useEffect
  // caso 1, ejucatar siempre un snipet de código- cada vez que hay un cambio en el estado del componente se ejecuta lo que estaen el useEffect
  // useEffect(() => {
  //   console.log("Cambio en el estado del componente");
  //   console.log("mostrando referencia a elem del dom");
  //   console.log(miRef);
  // })


  // caso 2 ejecutar solo cuando cambie el contador 1
  // si cambia el 2 no se ejecutara nada
  // useEffect(()=> {
  //   console.log("Cambio en el estado del contador 1");
  //   console.log("mostrando referencia a elem del dom");
  //   console.log(miRef)
  // },[contador1])


  // caso 2* ejecutar solo cuando cambie el contador 1 o el 2
  useEffect(()=> {
    console.log("Cambio en el estado del contador 1 o contador 2");
    console.log("mostrando referencia a elem del dom");
    console.log(miRef)
  },[contador1, contador2])//en esta lista van los estado que son afectados con el useEffect




  return (
    <div>
      <h1>***Ejemplo de UseState, useRef y useState***</h1>
      <h2>CONTADOR 1: {contador1}</h2>
      <h2>CONTADOR 2: {contador2}</h2>

      {/* elemento referenciado */}
      <h4 ref={miRef}>
        Ejemplo de elemento referenciado
      </h4>

      {/* botones del los contadores */}
      <div>
        <button onClick={incrementar1}>Incrementar contador 1</button>
        <button onClick={incrementar2}>Incrementar contador 2</button>
      </div>
    </div>
  );
}

export default Ejemplo2;
