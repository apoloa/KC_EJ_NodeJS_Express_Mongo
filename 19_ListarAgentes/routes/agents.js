var express = require('express');
var db = require('../lib/mysqlConnection');

var router = express.Router();

/* GET home page from  agents. */
router.get('/', function(req, res, next) {
    db.query('SELECT * FROM agentes', function(err, rows){
        if(err){
            return next(err);
        }
        res.render('agents', {title:'Agentes',
                             agents: rows });
    });
});

module.exports = router;