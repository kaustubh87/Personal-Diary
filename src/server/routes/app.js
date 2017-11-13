var express = require('express');
var router = express.Router();
var User = require('../models/User');

router.get('/', function (req, res, next) {
  User.findOne({}, function(){

        });

    res.render('node');
});


module.exports = router;
