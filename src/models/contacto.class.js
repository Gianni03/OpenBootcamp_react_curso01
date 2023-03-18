export class Contacto {
  nombre = '';
  apellido = '';
  mail = '';
  isConectado = false;

  constructor(nombre, apellido, mail, isConectado){
    this.nombre = nombre;
    this.apellido = apellido;
    this.mail = mail;
    this.isConectado = isConectado;

  }
}