'use script';

console.log("Se está ejecutando el index.html de DESARROLLADORES CODE 102")

// Variables

let nombre;
let validar;

// Funciones

function pedirNombre(){
    return prompt("Ingrese su nombre...");
}

function validarNombre(name) {
    if (name === "" || name === null) {
        return false;
    } else {
        return true;
    }
}

function saludar(){
    nombre = pedirNombre();
    if (validarNombre(nombre) === false) {
        saludar();
    } else {
        alert("Bienvenido "+nombre+"!");
    }
}
