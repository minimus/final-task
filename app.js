const
  express = require('express'),
  path = require('path'),
  favicon = require('serve-favicon'),
  logger = require('morgan'),
  cookieParser = require('cookie-parser'),
  bodyParser = require('body-parser'),

  index = require('./routes/index'),
  users = require('./routes/users'),
  menu = require('./routes/menu'),
  categories = require('./routes/categories'),
  offers = require('./routes/offers'),
  info = require('./routes/info'),
  facets = require('./routes/facets'),
  comparison = require('./routes/comparison'),
  search = require('./routes/search');

app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// uncomment after placing your favicon in /public
app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/data/menu', menu);
app.use('/data/category', categories);
app.use('/data/offer', offers);
app.use('/data/info', info);
app.use('/data/facets', facets);
app.use('/data/comparison', comparison);
app.use('/data/search', search);
app.use('/users', users);

app.get(/^(?!\/data\/)\S*/, (req, res, next) => {
  res.sendFile(path.resolve(__dirname, 'public', 'index.html'));
});

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
