var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Form Validation', success: req.session.success, errors: req.session.errors });
  req.session.errors = null;
}); //clears all errors and doesnt show user

router.post('/submit', function(req, res, next) {
  req.check('email', 'Invalid email address').isEmail();
  req.check('password', 'Password is invalid').isLength({min: 4}).equals(req.body.confirmPassword); //if they are invalid

  var errors = req.validationErrors(); //got rid of some routes //stores all errors here...
  if (errors) {
    req.session.errors = errors;
    req.session.success = false;
  } else {
    req.session.success = true;
  }
  res.redirect('/'); //checks valitity of some values // if not, redirect to the next place

  //can write our own validators, but there are many built in
});

module.exports = router;
