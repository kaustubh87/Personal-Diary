var express = require('express');
var router = express.Router();
var User = require('../models/User');

router.get('/', function (req, res, next) {
  User.findOne({}, function(){

        });

    res.render('node');
});

router.post('/', function (req, res, next){
    var firstname = req.body.firstname;
    var lastname = req.body.lastname;
    var password = req.body.password;
    var email = req.body.email;

    var user = new User({
      firstName: firstname,
      lastName: lastname,
      password: password,
      email: email
    });

    user.save();
    res.redirect('/home');
});

router.get('/home', function(req, res, next){
  res.render('home');
});


module.exports = router;
