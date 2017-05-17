const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const menu = require('./routes/menu');
const categories = require('./routes/categories');
const offers = require('./routes/offers');
const info = require('./routes/info');
const facets = require('./routes/facets');
const comparison = require('./routes/comparison');
const search = require('./routes/search');

const app = express();

app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/data/menu', menu);
app.use('/data/category', categories);
app.use('/data/offer', offers);
app.use('/data/info', info);
app.use('/data/facets', facets);
app.use('/data/comparison', comparison);
app.use('/data/search', search);

app.get(/^(?!\/data\/)\S*/, (req, res) => {
  res.sendFile(path.resolve(__dirname, 'public', 'index.html'));
});

// catch 404 and forward to error handler
app.use((req, res, next) => {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use((err, req, res) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
