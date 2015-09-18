'use strict';

var one = {
    id: 123,
    count: 41,
    desc: 'esto es la descripción'
};

var two = {
    name: 'El nombre',
    tag: 'js',
    values: [1,2,3]
};

var three = {
    count: 42,
    title: 'titulo',
    desc: null,
    values: [4,5,6]
}

var util = require('util');
var _extend = util._extend;

//Escribe sobre 'one' las propiedades de 'two'
var extendido = _extend(one, two);


console.log(extendido);
console.log(_extend(extendido, three));

