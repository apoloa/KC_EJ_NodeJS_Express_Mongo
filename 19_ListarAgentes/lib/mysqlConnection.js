"use strict";

// Importamos driver
var mysql = require('mysql');


// Creamos conexion
var connection = mysql.createConnection({
    host: 'didimo.es',
    user: 'usuariocurso',
    password: 'us3r',
    database: 'cursonode'
});

connection.connect(function(err,data){
    if(err){
        console.log(err);
        process.exit(-1);
    }

    console.log('Conectados a MySQL' , data);
});

module.exports = connection;

