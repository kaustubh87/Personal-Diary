var express = require('express');
var router = express.Router();
var User = require('../models/User');
var Contact = require('../models/Contacts');

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

router.post('/save', function(req,res,next){
  var firstName = req.body.firstName;
  var lastName = req.body.lastName;
  var contact = new Contact({
    firstName: firstName,
    lastName: lastName
  });
  user.save();
  res.render('node');
});

router.get('/', function(req,res,next){
  User.findOne({}, function(err, doc){
    if(err){
      return res.send('Error');
    }
    res.render('node', {email: doc})

  });
});

router.get('/user/:id', function(req, res, next){

  var id = params.body.id;


  User.findById({id}, function(err, data){
    if(err){
      return res.send('Error');
    }
    res.render('node', {id: data});
    res.redirect('/home');
  })
});

router.get('/logout', function(err, data){
  if(err){
    return res.send('Error');
  }
  res.render('logout');

});

router.get('/login', function(err, data){
  if(err){
    return res.send('Error');
  }
  res.render('login');
});


module.exports = router;
