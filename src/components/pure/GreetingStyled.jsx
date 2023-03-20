import React, { useState } from 'react';


// defininedo estilos en constantes

// usuario logeado
const loggedStyle = {
  color: "blue"
};

// usuario no logeado
const unloggedStyle = {
  color: "tomato",
  fontWeigth: "bold"
}

const GreetingStyled = (props) => {
// generar estado para controlar si el user esta o no logeado
const [logged, setLogged] = useState(false);


  return (
    <div style={ logged ? loggedStyle : unloggedStyle}>
    { logged ? <h3>Hola, {props.name}</h3> : <p>debes ingrear</p>}
        <button onClick={()=>{
          console.log("boton pulsado");
          setLogged(!logged);
        }}>
          {logged ? "logout" : "login"}
        </button>
    </div>
  );
}

export default GreetingStyled;
