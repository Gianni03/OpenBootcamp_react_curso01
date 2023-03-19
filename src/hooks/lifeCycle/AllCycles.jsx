import React, {useEffect} from 'react';

const AllCycles = () => {

  // solo puede haber un useEffect por componente, y el efecto se va a realizar siempre
  useEffect(() => {
    console.log("componente actualizado, creado")
    const intervaloID = setInterval(()=>{
      document.title = `${new Date()}`;
      console.log("actualizando el componente");
    }, 1000)
    return () => {
      console.log("componente va a desaparece");
      document.title = "Tiempo detenido";
      clearInterval(intervaloID);
    };
  }, []);


  return (
    <div>
      
    </div>
  );
}

export default AllCycles;
