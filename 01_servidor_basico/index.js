// "use strict" es para hacer un poco más coherente el código javascript.
'use strict';

// Javascript se permite dos tipos de comillas las simples (') y las dobles ("), debemos ser homogeneos y mantener
// durante todo el proyecto.

var http = require('http'); // Cargamos la libreria del core de nodejs

// Llamamos a una funcion del http;
var server = http.createServer( function (request, response){
    // Respondemos de forma correcta una cabecera
    response.writeHead(200, {'Content-type': 'text/html'});
    response.end('<style>html {background-image: url("http://bit.do/wakeupneo");}</style>');
});
// Ponemos el servidor a escuchar por el puerto y la ip
server.listen(1337, '127.0.0.1');

console.log('Servidor arrancado en http://127.0.0.1:1337');