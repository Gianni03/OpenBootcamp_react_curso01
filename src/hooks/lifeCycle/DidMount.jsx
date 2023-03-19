// uso  del metodo de ciclo de vida en componente de clase y el hook en componente funcional
import React, { Component, useEffect } from 'react';

export class DidMount extends Component {

  componentDidMount(){
    console.log("comportamiento antes de q el comp sea renderizado")
  }

  render() {
    return (
      <div>
        <h1>Did Mount</h1>
      </div>
    );
  }
}





export const DidMountHook = () => {

  useEffect(() => {
    console.log("comportamiento antes de q el comp sea renderizado")

  }, []);//los [] vacios es que se ejecutaa una sola vez

  return (
    <div>
      
    </div>
  );
}

export default DidMount;


