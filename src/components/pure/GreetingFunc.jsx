import React, { useState } from 'react';
import PropTypes from 'prop-types';


const GreetingFunc = (props) => {

  // intro a useState
  // const [varible, metodo para actualizarla] = useState(valor inicial)
  const [age, setage] = useState(42);

  const birthday = ()=>{
// actualizando el estado
    setage(age + 1)

  }


  return (
    <div>
      <div>
        <h1>¡Hola { props.name }! desde componente funcioal</h1>
        <h2>tu edad es de: {age}</h2>
        <div>
          <button onClick={birthday}>
            un año más
          </button>
        </div>
      </div>
    </div>
  );
};


GreetingFunc.propTypes = {
  name: PropTypes.string
};


export default GreetingFunc;
