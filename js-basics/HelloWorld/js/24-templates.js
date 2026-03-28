'use strict'

// Text templates

var _name = prompt("ESCRIBE TU NOMBRE");
var lastNames = prompt("ESCRIBE TUS APELLIDOS");

var text = `
    <h1>Hola que tal</h1>
    <h3>Mi nombre es ${_name}</h3>
    <h3>Mis apellidos son ${lastNames}</h3>
`;
document.writeln(text); 