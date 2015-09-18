'use strict';

// cargamos el modulo de express
var express = require('express');

// crear una app de express que es lo mismo que una instancia.
var app = express(); // Podemos ver que express es un closure

// le vamos a decir que escuche peticiones en /

// app.get te dice que se ponga a escuchar por la ruta y le tienes que pasar un callback, el request es el objeto
// de peticion y el response es el objeto que nosotros tenemos que emplear para enviarle a quien haya hecho la petición
// de forma como queramos.
// Esto es una 'ruta' en Express
app.get('/', function (request, response) {
    // Esta callback se ejecutará cuando un cliente realize una peticion sobre el get y la ruta que le hemos pasado
    // en el get.

    console.log('Peticion');

    // vamos a responder las peticiones
    response.send('Hello');
});

// mediante el comando listen podemos decirle a express por que puerto se tiene que quedar escuchando tenemos la
// posiblidad de poner un callback para que nos diga cuando ha estado arrancado
// el app.listen te devuelve un objeto server donde podemos descubrir el puerto por cual se arrancado e incluso más
// propiedades del mismo.
var server = app.listen(3000, function(){
    var port = server.address().port;

   console.log('Servidor Arrancado por el puerto ' + port);
});

// podemos poner el puerto 80 sin problemas per requerira que seamos administradores de la maquina en cuestion.