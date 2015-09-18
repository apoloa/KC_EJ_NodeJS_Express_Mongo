"use strict";

var Coche = function(name){
    this.name = name;
    this.saluda = function(){
        console.log(' Hola soy '+ this.name);
    }
};



//Creamos un objeto
var tesla = new Coche('tesla');

// Llamamos al metodo

tesla.saluda();

// Otro llama al metod

setTimeout(tesla.saluda, 1000);
// Como el propertario del this es el que le da el valor del this al objeto. Por esa razón si quietamos el 'use strict'
// podemos ver como es gloval.

setTimeout(tesla.saluda.bind(tesla), 2000);
// Mediante el bind podemos asignarle el this que nosotros queramos


// tenemos otras funcines para realizar lo mismo

setTimeout(tesla.saluda.call(tesla),3000); // esto ejecuta la función y devuelve el resultado al timeout.
console.log("Se ha llamado");
var Planta = function(name){
    this.name = name;
    this.crece = tesla.saluda; //reutilizo el metodo con el this de Planta.
    this.crece1 = function () {
        tesla.saluda();
    }
}


var planta = new Planta('Acacia');

console.log(planta.name);
planta.crece1()