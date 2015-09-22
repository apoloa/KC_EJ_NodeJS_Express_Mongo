"use strict";

// requerimos el paquete
var mongoose = require('mongoose');
// instanciamos la conexion
var db = mongoose.connection;

// handler de error de conexion
db.on('error', function(err){
    console.log('Error' ,err);
    process.exit(-1); // --> Significa que salimos la aplicacion por que sino tenemos acceso
});

// handler de conexion

db.once('open', function () {
    console.log('Conectados a MongoDB');
});

// conectamos

mongoose.connect('mongodb://localhost/prueba');

// No hace falta hacer el export ya que será el objeto mongoose esta disponible en todos sitios mediante el
// require