"use strict";

var Coche = function(ruedas){
    console.log('El coche tienes ' + ruedas + " ruedas");
}

// Cuando hacemos un new convertimos el contenido de una variable en objeto
var coche = new Coche(4);

/*
Mediante la comprobación del tipo podemos ver que el tipo es object
 */
console.log(typeof(coche));