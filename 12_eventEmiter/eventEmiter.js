'use strict';

var events = require('events');


var myEventEmitter = new events.EventEmitter();

myEventEmitter.on('suena telefono', function (quien) {
    if(quien !== 'madre'){
        console.log('ring, ring');
    }

});

myEventEmitter.on('suena telefono', function (quien) {
    console.log('brr brr');
});

myEventEmitter.emit('suena telefono', 'fdsf');