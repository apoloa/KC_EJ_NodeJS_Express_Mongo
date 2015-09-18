var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {
    title: 'Express',
    prueba: '<h1>esto es un titulo</h1>',
    lista: ['uno', 'dos', 'tres'],
    par: (new Date().getSeconds() % 2 === 0? 'par' : 'impar'),
  });
});

module.exports = router;
