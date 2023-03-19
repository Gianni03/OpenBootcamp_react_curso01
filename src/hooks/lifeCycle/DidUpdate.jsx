// metodo comcponetDidUpdate en comp de clase y hook en comp funcional

import React, { Component, useEffect } from 'react'

export  class DidUpdate extends Component {

  componentDidUpdate(){
    console.log("Cuando el componente recive nuevas props o cambios en su estado")
  }

  render() {
    return (
      <div><h1>DidUpdate</h1></div>
    )
  }
}




export const DidUpdateHook = () => {

  useEffect (()=>{
    console.log("Cuando el componente recive nuevas props o cambios en su estado")
  });//sin corchetes asi se ejecuta con cada modificacion

  return (
    <div>
      <h1>DidUpdate</h1>
    </div>
  );
}



