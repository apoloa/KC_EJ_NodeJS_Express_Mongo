"use strict";

var express = require('express');
var router = express.Router();

//var Agente = require('../models/Agente');

// Alternativa
var mongoose = require('mongoose');
var Agente = mongoose.model('Agente');

router.get('/', function (req, res) {

    Agente.lista({}, function(err,lista){
        if(err){
            console.log(err);
            // Al ser una api no debemos hacer next ya que el error envia un contenido web, deberiamos enviar un json
            return res.json({success:false, error:err});
        }
        //devolver una confirmación
        res.json({success: true, data: lista});
    });

});

router.get('/:id', function (req, res) {

    var id = req.params.id;

    var agente = new Agente({name: 'Instancia', age: 33});

    agente.get(id, function (err, data) {
        if(err){
            console.log(err);
            return res.json({status:false, error:err});

        }
        return res.json({status:true, data:data});
    });

});



/* POST /apiV1/agentes */
router.post('/', function(req, res) {
    // crear un registro de agente
    var nuevo = req.body;

    // creamos un registro agente
    var agente = new Agente(nuevo); //{name: 'Nuevo', age:18}

    agente.save(function (err, creado) {
        if(err){
            console.log(err);
            // Al ser una api no debemos hacer next ya que el error envia un contenido web, deberiamos enviar un json
            return res.json({success:false, error:err});
        }
        //devolver una confirmación
        res.json({success: true, agente: creado});
    });
});

module.exports = router;
