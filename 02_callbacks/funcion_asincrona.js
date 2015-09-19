'use strict';

// Este ejercicio lo que explica es el funcionamiento basico del callback, esta es una funcion recursiva para crear un
// iterador.

// No podemos crear un bucle si tenemos una funcion callback, lo que siginifica que el codigo es asincrono, en ese caso
// debemos emplear las funciones recursivas para realizarlos

console.log('Empezamos');

/*
 Funcion que queremos que se ejecute, una vez finalizada ejecturará la función callback
 Dicha funcion es un "next" indicando que la siguiente funcion a ejecutar.
 */
var escribeTras2Segundos = function(texto, callback){
  setTimeout(function () {
      console.log(texto);
      callback();
  }, 2000)
};

/*
Función recursiva que va descenciendo el numero hasta llegar a 0 ejecutando la funcion.
Para realizar la recursividad tenemos que definir la función con otro callback
 */
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

/*
Funcion que prueba el funcionamiento del bucle iterador mediante recursividad
 */

serie(5, escribeTras2Segundos, function () {
    console.log("proceso finalizado");
});








