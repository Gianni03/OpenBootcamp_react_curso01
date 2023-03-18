import React from 'react';
import PropTypes from 'prop-types';
import { Contacto } from '../../models/contacto.class';


const ContactoComponente = ({ contacto }) => {
  return (
    <div>
      <h2>Nombre: { contacto.nombre }</h2>
      <h3>Apellido: { contacto.apellido }</h3>
      <h4>Mail: { contacto.mail }</h4>
      <h5>Esta conectado: { contacto.isConectado ? 'Contacto En Línea' : 'Contacto No Disponible' }</h5>
      
    </div>
  );
};


ContactoComponente.propTypes = {
  contacto: PropTypes.instanceOf(Contacto)
};


export default ContactoComponente;
