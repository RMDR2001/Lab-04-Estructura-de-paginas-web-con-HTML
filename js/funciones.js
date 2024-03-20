'use script';

console.log("Se está ejecutando el index.html de DESARROLLADORES CODE 102")

// Variables

let nombre;
let validar;

// Funciones

// function comenzar(){
//     document.write("Bienvenido a mi WebPage hecho de mis clases de Code 102 de Enter Tech School!!!")
// }

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
