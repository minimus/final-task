const
  express = require('express'),
  router = express.Router(),
  mongoClient = require('mongodb').MongoClient,
  assert = require('assert'),
  mongoUrl = 'mongodb://minimus:Reload1962@ds137230.mlab.com:37230/sinplelib-data';

async function getData(ids) {
  const db = await mongoClient.connect(mongoUrl);
  try {
    const goods = db.collection('offers');
    return {
      status: true,
      data: await goods.find({id: {$in: ids}}).toArray(),
      params: await goods.distinct('param.name', {id: {$in: ids}})
    }
  }
  catch (e) {
    return Promise.reject(e);
  }
  finally {
    db.close()
  }
}

router.get('/:items', (req, res, next) => {
  const items = req.params.items.split('--').map(e => parseInt(e));
  getData(items)
    .then(data => res.json(data))
    .catch(e => {
      const err = new Error(e);
      err.status = 404;
      next(err);
    })
});

module.exports = router;
