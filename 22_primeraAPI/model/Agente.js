"use strict";

var mongoose = require('mongoose');

// Definir esquema de agente
var agenteSchema = mongoose.Schema({
    name: String,
    age: Number
});

// Para crear una metodo estatico
agenteSchema.statics.lista = function(filters, callback){

    var query = Agente.find(filters);

    query.sort('name');

    query.exec(function(err,rows){
        if(err){
            return callback(err);
        }

        return callback(null, rows);
    });
};

// Para crea un metodo de instancia
agenteSchema.methods.get = function(idAgente, callback){
    console.log(this);
    return callback(null,this);
};

// Para crea un metodo de instancia
agenteSchema.methods.sumaEdad = function(edad){
    this.age = this.age + edad;
    return this;
};



// Exportar

var Agente = mongoose.model('Agente', agenteSchema);

module.exports = Agente;
