'use strict';

var fs = require('fs');

function readDependencies(cb) {
    // abrir fichero package.json
    console.log(__dirname);
    fs.readFile('package.json', function(err, data){
        if(err){
            return cb(err);
        }
        // Estructura del try catch
        try{
            // parsarlo
            var packageJson = JSON.parse(data);
        }catch(e){
            return cb(e);
        }
        // devolver las dependencias
        return cb(null, Object.getOwnPropertyNames(packageJson.dependencies));

    });
}

// exportarmos el modulo
module.exports = readDependencies;