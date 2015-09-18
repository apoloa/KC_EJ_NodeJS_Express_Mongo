'use strict';

// hacemos un constructor de objetos
var Persona = function(name){
    this.name = name;
}
// creamos un objeto

var persona = new Persona('Thomas');

// le asignamos un metodo a ese objeto

persona.saluda = function(){
  console.log('Hola soy ' + this.name);
};

persona.saluda();

// creamos otro objeto

var luis = new Persona('Luis');


// veremos que no tiene el metodo

// luis.saluda(); // Da error

// ponerle un metodo al prototipo

Persona.prototype.come = function(){
    console.log('ñam, ñam');
};

// lo tienen todos

persona.come();
luis.come();