"use strict";

var mongoose = require('mongoose');

// Definir esquema de agente
var agenteSchema = mongoose.Schema({
    name: String,
    age: Number
});


// Exportar

var Agente = mongoose.model('Agente', agenteSchema);

module.exports = Agente;