"use strict";

// Requerir el driver

var mysql = require('mysql');

// Crear una conexion
var connection = mysql.createConnection({
    host: 'didimo.es',
    user: 'usuariocurso',
    password: 'us3r',
    database: 'cursonode'
});

// Conectar
// Podemos realizar el connect con un callback que nos devuelve cuando ha sido conectado
connection.connect();

// Realizar una query.
connection.query('SELECT * FROM agentes', function(err, rows, fields){
    if(err){
        throw err;
    }
    rows.forEach(function (row) {
        console.log(row);
    });

    console.log(fields);
});