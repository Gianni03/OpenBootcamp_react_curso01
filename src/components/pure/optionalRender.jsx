import React, { useState } from 'react';


let red = 0;
let green = 200;
let blue =150;

const loggedStyle = {
  backgroundColor: `rgb(${red},${green},${blue})`,
  color: "blue",
  fontWeigth: "bold"
};

// usuario no logeado
const unloggedStyle = {
  backgroundColor: 'tomato',
  color: "white",
  fontWeigth: "bold"
}
// login logout button
const LoginButton = ({logoutAction, propStyle}) => {
  return(
    <button style={propStyle} onClick={logoutAction}>Login</button>
  )
}
const LogoutButton = ({loginAction, propStyle}) => {
  return(
    <button style={propStyle} onClick={loginAction}>LogOut</button>
  )
}

// ? -> expresion true && elemento => se renderiza la expresion
//? -> expresion false && elemento => no se renderiza la expresion


const OptionalRender = () => {


  const [acceso, setAcceso] = useState(false);
  const [messaje, setMessaje] = useState(0);

  // const updateAcces = () => {
  //   setAcceso(!acceso);
  // }

  const loginAction = () => {
    setAcceso(true)
  }
  const logoutAction = () => {
    setAcceso(false)
  }

  // let optionalButton;
  // if(acceso) {
  //   optionalButton = <button onClick={updateAcces}>LogOut</button>
  // }else {
  //   optionalButton = <button onClick={updateAcces}>Login</button>
  // }
  

  let optionalButton;
  if(acceso) {
    optionalButton = <LogoutButton propStyle={ unloggedStyle } logoutAction={logoutAction}></LogoutButton>
  }else {
    optionalButton = <LoginButton propStyle={ loggedStyle } loginAction={loginAction}></LoginButton>
  }
  
  // mensages sin leer
  let addMessages = () => {
    setMessaje(messaje + 1)
  }

  return (
    <div>
      { optionalButton }
      {/* { messaje > 0 && <p>Tienes {messaje} sin leer</p>}
      { messaje === 0 && <p>No hay mensajes nuevos</p>} */}

      {/* con operador ternario */}
      {acceso ? (
        <div>
      {messaje > 0  ?
        <p>Tienes {messaje} sin leer</p> :
        <p>No hay mensajes nuevos</p>}
      <button onClick={addMessages}>{messaje === 0 ? 'agrega tu primer mensaje' : 'add a new messaje'}</button>
        </div>)
      : null}
    </div>
  );
}

export default OptionalRender;
