// entender el uso de props.children

import React from 'react';

const Ejemplo4 = (props) => {
  return (
    <div>
      <h1> Ejemplo de chldren props</h1>
      <h2>nombre: {props.nombre}</h2>

      {/* props.children ejecutara lo q se encuentre entre las llaves de este componente desde el componente de rden sup */}
      {props.children}
    </div>
  );
}

export default Ejemplo4;
