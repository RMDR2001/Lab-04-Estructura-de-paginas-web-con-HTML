'use script';

console.log("Se está ejecutando el index.html de DESARROLLADORES CODE 102")

alert("Estás por ingresar a Desarrolladores Code 102");

let nombre;

nombre = prompt("Ingrese su nombre...");

let validar = confirm("Su nombre es: "+nombre+"?");

if (validar == true) {
    alert("Bienvenido "+nombre);
} else {
    nombre = prompt("Cuál es tu nombre?");
    alert("Bienvenido "+nombre);
}