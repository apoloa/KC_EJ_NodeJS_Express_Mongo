var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/:id', function(req, res, next) {
    //Aqui aparecen los parametros que nos han pasado por req.
    console.log(req.params);

    var id = req.params.id;

    res.send('respond with a resource');
});

// El next lo podemos quitar si no lo empleamos
router.get('/:coche', function(req, res, next) {
    //Aqui aparecen los parametros que nos han pasado por req.
    console.log('params: ', req.params);

    console.log('query: ', req.query);

    res.send('respond with a resource');
});

// Peticion post con body
router.post('/:id', function(req,res) {
    console.log('body: ', req.body);

    // Hay que devolver la peticion ya que sino el servidor se queda esperando
    res.send('Codigo el body');
});

module.exports = router;
