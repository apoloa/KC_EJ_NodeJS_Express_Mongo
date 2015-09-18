'use strict';

// hacer una funcion que devuelve otra
// la segunda tendrá acceso al scope de su madre


function crearClosure(name){
    return function(){
        console.log(name);
    }
}

// crear el closure

var closure = crearClosure('tesla');

var closure2 = crearClosure('tesla2');
// usamos el closure
closure();

closure2();