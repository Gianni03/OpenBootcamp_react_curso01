import React, { useRef } from 'react';

const Child = ({ name, send, update }) => {

  const messageRef = useRef('');
  const nameRef = useRef('');

  function pressButton(){
    const text = messageRef.current.value;
    alert(`sin parametros y con referencia ${text}`)
  }

  function pressButtonParams(text){
    alert(`Text: ${text}`)
  }

  function submitName(e) {
    e.preventDefault();
    update(nameRef.current.value)
  }

  

  return (
    <div style={ {backgroundColor: "cyan", padding: "30px", margin: "14px"}}>
      <p onMouseOver={ () => console.log("paso por el parrafo")}>
      Hello {name}
      </p>
      
      <button onClick={() => {
        console.log("Botón 1 pulsado")
      }}>Botón 1</button>

      <button onClick={pressButton}>Botón 2</button>

      <button onClick={ () => pressButtonParams("Hola parametro")}>Botón 3</button>
      
      <input type="text" 
      placeholder= "insert a text for your father" 
      onFocus={()=> console.log("input Focus")}
      onChange={(e) => console.log("input change", e.target.value)}
      onCopy={()=> console.log('text copiado del input')}
      ref = {messageRef} />

      <button onClick={() => send(messageRef.current.value)}>
      Al Father
      </button>

      <div style={{marginTop: "20px"}}>

        <form action="" onSubmit={submitName}>
          <input type="text" placeholder='New Name' ref={nameRef} />
          <button type='submit'>Update Name</button>
        </form>
      </div>

    </div>
  );
}

export default Child;
