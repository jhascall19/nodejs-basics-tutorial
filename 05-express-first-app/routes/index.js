var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) { //if you go to normal file...
  res.render('index', { title: 'Cool, huh!', condition: false });
});

/* GET users listing. */
router.get('/users', function(req, res, next) { //if you go /users, you get a page with this text
  res.send('respond with a resource');
});

router.get('/users/detail', function(req, res, next) { //this is further another location to look
  res.send('detail');
});


module.exports = router; //exports the file
