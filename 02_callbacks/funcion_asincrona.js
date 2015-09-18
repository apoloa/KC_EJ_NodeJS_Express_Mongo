'use strict';

// Este ejercicio lo que explica es el funcionamiento basico del callback, esta es una funcion recursiva para crear un
// iterador mediante

console.log('Empezamos');


var escribeTras2Segundos = function(texto, callback){
  setTimeout(function () {
      console.log(texto);
      callback();
  }, 2000)
};


function serie(numero, func, callback){
    if (numero <= 0) {
        callback();
    } else {
        numero--;
        func(numero, function () {
            serie(numero, func, callback)
        });
    }
}

serie(5, escribeTras2Segundos, function () {
    console.log("proceso finalizado");
});








