const
  express = require('express'),
  path = require('path'),
  router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  //res.render('index', { title: 'Express' });
  res.sendFile(path.resolve(__dirname, '..', 'public', 'index.html'));
});

module.exports = router;
