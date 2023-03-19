// controlar cuando va a desaparecer en componete de clase(metodo) y funcional(hook)

import React, { Component, useEffect } from 'react'

export  class WillUnMount extends Component {

  componentWillUnmount(){
    console.log("antes de q el componente desaparezca")
  }
  render() {
    return (
      <div>
      <h1>
      WillUnMount
      </h1> 
      </div>
    )
  }
}


export const WillUnMountHook = () => {

  useEffect(() => {
    //aqui no ponemos nada
    return () => {
      console.log("antes de q el componente desaparezca")
    };
  }, []);

  return (
    <div>
      <h1>
      WillUnMount
      </h1> 
    </div>
  );
}



