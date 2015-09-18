"use strict";

var fs = require('fs');
var path = require('path');


// Abrir un fichero

var fichero = path.join('./', 'pruebas.json');

console.log('Abriendo fichero: ' + fichero);

fs.readFile(fichero, {encoding: 'utf8'}, function(err, data){
    if(err){
        console.error(err);
        return;
    }

    var objeto = JSON.parse(data);
    console.log(objeto.nombre);
});

// Convetir su contenido (JSON) en objeto

// El objeto lo usamos

