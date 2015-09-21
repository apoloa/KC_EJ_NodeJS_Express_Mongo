'use strict';

var express = require('express');
var router = express.Router();

var readDependencies = require('../lib/readDependencies');

router.get('/', function (req, res, next) {
    readDependencies(function(err, data){
        // controlamos el error
        if(err){
            console.log(err);
            return next(err);
            // Acordarse de poner el return sino que seguiria el res.render de abajo. Entonces saldria error por
            // intentar responder 2 veces
        }
        res.render('dependencies', {data: data});
    });
});

module.exports = router;