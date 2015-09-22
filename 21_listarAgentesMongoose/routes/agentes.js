"use strict";

var express = require('express');
var router = express.Router();

//var Agente = require('../models/Agente');

// Alternativa
var mongoose = require('mongoose');
var Agente = mongoose.model('Agente');

/* GET home page from  agents. */
router.get('/', function(req, res, next) {
    // crear un registro de agente
    var agente = new Agente({name:'Nata', age:18});
    agente.save(function (err, creado) {
        if(err){
            console.log(err);
            return next(err);
        }

        console.log(creado);

    });
    res.send('respond with a resource');
});

module.exports = router;
