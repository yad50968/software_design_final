

var createError = require('http-errors');
var express = require('express');
var path = require('path');
var logger = require('morgan');
var session = require('express-session');
var bodyParser = require('body-parser')
const uuid = require('uuid/v4');
require('./middleware/database')
var ejs = require('ejs');


var app = express();
// configure session
app.use(session({
    genid: (req) => {return uuid()}, // use UUIDs for session IDs
    secret: 'babalabala',
    resave: false,
    saveUninitialized: true
}))


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.engine('html', ejs.__express);
app.set('view engine', 'html');
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
var indexRouter = require('./routes/index');
app.use('/', indexRouter);

app.use('/file', express.static('./server/uploads'));


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});


module.exports = app;
