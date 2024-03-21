'use strict';

// FUNCIONES
function calificar(){

    let calificacion = "";
    let estrellas;
    let ingreso = false;
        
    let contador = 0;

    while (ingreso === false) {
        estrellas = prompt("Del 1 al 5, ¿Con cuántas estrellas calificarías la página?");
        if (estrellas === "" || estrellas === null){
            ingreso = false;
        } else {
            ingreso = true;
        }
    }
    
    let numEstrellas = parseInt(estrellas);
    

    for (let i = 1 ; i<=numEstrellas ; i++) {
        calificacion = calificacion+"⭐";

        // "Extender los objetivos" 
        contador++;
    }
    document.write("Gracias por la calificación<br>Su calificación: "+calificacion+"<br>"+contador+" estrella(s)")
}