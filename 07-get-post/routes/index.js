var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Cool, huh!', condition: true, anyArray: [1,2,3] });
});

router.get('/test/:id', function(req, res, next) { //this route expects this id it expects this parameter
  res.render('test', {output: req.params.id}); //renders and passes the output as a variable tbat is the avaliable route of the .id.. you could aslo have others
});

router.post('/test/submit', function(req, res, next) {  //this is a redirect. you are allowed to have a user input...
  res.redirect('/test/...');
});

module.exports = router; //final export
