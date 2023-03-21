import React, { useState } from 'react';
import Child from '../pure/child';

const Father = () => {


  const [name, setName] = useState('Gianni');


  function showMeassage(text) {
    alert(`Message recive ${text}`)
  }

  function updateName(newName){
    setName(newName)
  }


  return (
    <div style={ {backgroundColor: "tomato", padding: "10px"}}>
      <Child name={name} send={showMeassage} update={updateName}></Child>
    </div>
  );
}

export default Father;
