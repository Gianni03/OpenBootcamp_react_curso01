// pasar el componente de clase a un componente funcional
import React, { useState, useEffect } from 'react';

const Clock = () => {
  const [fecha, setFecha] = useState(new Date());
  const [edad, setEdad] = useState(0);
  const [nombre, setNombre] = useState('Martin');
  const [apellidos, setApellidos] = useState('San José');

  useEffect(() => {
    const intervalId = setInterval(() => {
      setFecha(new Date());
      setEdad((prevEdad) => prevEdad + 1);
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div>
      <h2>Hora Actual: {fecha.toLocaleTimeString()}</h2>
      <h3>
        {nombre} {apellidos}
      </h3>
      <h1>Edad: {edad}</h1>
    </div>
  );
};

export default Clock;
