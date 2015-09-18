'use strict';

var Persona = function(nombre ,apel){
    this.nombre = nombre;
    this.apellido = apel;
}

var trinity = new Persona('Trinitiy');

var matrixMixin = {
    vuela: function(){
        console.log(this.nombre + ' vuela');
    },
    esquivaBalas: function () {
        console.log(this.nombre + ' esquiva balas');
    }
};


var util = require('util');

Persona.prototype = util._extend(Persona.prototype,matrixMixin);

var neo = new Persona('Thomas, Anderson');


neo.vuela();
trinity.vuela();

neo.esquivaBalas();
trinity.esquivaBalas();