//requirments (slimar to "using" in C#)
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var ejs = require('ejs');
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs'); //view engine set as html, ofc i can use index.ejs, depends on my mood. if needed,i can change the view engine as html, and edit the same shit in index.js in routes, and done.
app.engine('html',ejs.__express);
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/static', express.static('public/stylesheets')); //for css, so how tf it can load js?
app.use('/img', express.static('public/images')); //for images
app.use('/', indexRouter); //the main router
app.use('/users', usersRouter); //the user-defined router (just for joking)

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404)); //yeah just a http 404 bmomb code
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {}; //output error webpage (Just a joke too.)

  // render the error page
  res.status(err.status || 500);
  res.render('comming');
});

module.exports = app;
