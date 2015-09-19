'use strict';

var valor = 'hola';
// Lo que hace Javascript es subir hacia arriba la declaración de la variable, en este caso podemos ver como queda la
// funcion pinta con el hoisting en pintaHoisting
function pinta(){
    console.log(valor);
    var valor = 'adios';
}

funcion pintaHoisting(){
    var valor;
    console.log(valor);
    valor = 'adios';
}

pinta();