'use strict';

var async = require('async');

// definir un array

var arr = ['uno', 'dos', 'tres'];

// definir un iterador

var iterador = function(elemento, callback){

    if(elemento === 'dos') {
        //return callback(true, null); // deja de enviar
        // el primer argumento es el error, el segundo el resultado
        return callback(null); // no envia el numero dos pero el tres si
    }
    elemento = elemento + '-procesado';
    return callback(null, elemento);


}

// procesar el array

async.concat(arr,iterador, function (err, resultados) {
	// mostrar resultados
    console.log(resultados);
});

