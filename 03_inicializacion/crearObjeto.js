"use strict";

var Coche = function(ruedas){
    console.log('El coche tienes ' + ruedas + " ruedas");
}

// Cuando hacemos un new convertimos el contenido de una variable en objeto
var coche = new Coche(4);

console.log(coche);