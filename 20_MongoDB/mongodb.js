"use strict";


var mongo = require('mongoskin');

var db = mongo.db('mongodb://localhost:27017/prueba');

db.collection('agentes').find().toArray(function(err,data){
    if(err){
        throw err;
    }
    console.log(data);
});
