// ej de componente de clase con los metodos de ciclo de vida

import React, { Component } from 'react';
import PropTypes from 'prop-types';


class LifeCycleEx extends Component {
  
  constructor(props){
    super(props)
    console.log("Contructor: cuando si instancia el componente")
  }

  componentWillMount(){//deprecado
    console.log("antes del montaje")
  }

  componentDidMount(){
    console.log("justo al terminar el montaje, antes de renderizarlo")
  }

  componentWillReceiveProps(){ //deprecado
    console.log("si va a recivir nuevas props")
  }

  shouldComponentUpdate(){
    // return true || false
    // controla si el comp sedebe actualizar o no
  }

  componentWillUpdate(){ //deprecado
    console.log("justa antes de actualizarse")
  }

  componentDidUpdate(){
    console.log("justo despues de actualizarse")
  }

  componentWillUnmount(){
    console.log("justo antes de desaparecer")
  }

  render(){
    return(
      <div>
        
      </div>
    )
  }




}


LifeCycleEx.propTypes = {

};


export default LifeCycleEx;
