'use strict';

// FUNCIONES
function calificar(){

    let calificacion = "";
    let estrellas;
    let ingreso = false;
        
    let contador = 0;

    // Agrega validación en uno de los inputs del usuario

    while (ingreso === false) {

        // Solicita al usuario una pregunta relevante para un número

        estrellas = prompt("Del 1 al 5, ¿Con cuántas estrellas calificarías la página?");
        if (estrellas === "" || estrellas === null){
            ingreso = false;
        } else {
            ingreso = true;
        }
    }
    
    let numEstrellas = parseInt(estrellas);
    
    // Utiliza un bucle en tu código JavaScript para mostrar la imagen tantas veces.

    for (let i = 1 ; i<=numEstrellas ; i++) {
        calificacion = calificacion+"⭐";

        /********************************************************************************************************
        "Extender los objetivos" 
        A medida que visualizes cada imagen, muestra un contador al lado que indica el número de la imagen.
        *********************************************************************************************************/

        contador++;
    }
    
    document.write("Gracias por la calificación<br>Su calificación: "+calificacion+"<br>"+contador+" estrella(s)")
}