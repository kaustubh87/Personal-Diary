var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

var appRoutes = require('./server/routes/app');

var app = express();
mongoose.connect('localhost:27017/diary');

// view engine setup
app.set('views', path.join(__dirname, './server/views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', appRoutes);

app.listen(8080, function () {
console.log('Example listening on port 8080');
});

module.exports = app;
