'use strict';

var express = require('express');
var router = express.Router();

var readDependencies = require('../lib/readDependencies');

router.get('/', function (req, res) {
    readDependencies(function(err, data){
        console.log(err,data);
        res.render('dependencies', {data: data});
    });
});

module.exports = router;