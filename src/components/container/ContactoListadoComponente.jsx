import React from 'react';
import { Contacto } from '../../models/contacto.class';
import ContactoComponente from '../pure/ContactoComponente';

const ContactoListadoComponente = () => {

  const contactoPrincipal = new Contacto('Gianni', 'Pasquinelli', 'giannipasquinelli@gmail.com', true);

  return (
    <div>
    <div>
        <h1>
        Contacto:
        </h1>
      </div>
      {/* TODO aplicar un for/loop para renderizar una lista */}
      <ContactoComponente contacto={ contactoPrincipal }></ContactoComponente>
      
    </div>
  );
}

export default ContactoListadoComponente;
