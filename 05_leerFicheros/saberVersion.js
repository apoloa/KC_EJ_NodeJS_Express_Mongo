'use strict';

var fs = require('fs');
var path = require('path');


function versionModulo(nameModule, callback){
    var packageJSONModule = path.join('./','node_modules',nameModule,'package.json');
    fs.readFile(packageJSONModule,{encoding: 'utf8'}, function (err, data) {
        if(err){
            //callback(err,null); // el segundo parámetro con null no es necesario
            callback(err); 
        }else{
            var jsonModule = JSON.parse(data);
            //callback(false,jsonModule.version); // mejor que false, usa null
            callback(null,jsonModule.version);
        }
    })
}

versionModulo('chance', function(err,data){
    if(err){
        console.error("Ha sucedido un error");
    }  else{
        console.log("Version: " + data);
    }
});