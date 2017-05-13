const
  express = require('express'),
  router = express.Router(),
  mongoClient = require('mongodb').MongoClient,
  assert = require('assert'),
  mongoUrl = 'mongodb://minimus:Reload1962@ds137230.mlab.com:37230/sinplelib-data';

async function getMenuData() {
  const db = await mongoClient.connect(mongoUrl);
  try {
    const cats = db.collection('categories');
    return await cats.find().toArray();
  }
  catch (e) {
    return Promise.reject(new Error(e));
  }
  finally {
    db.close();
  }
}

function getCats(data, root) {
  root.children = [];
  for (const val of data) {
    if (val.parentid === root.id) {
      root.children.push(val);
      getCats(data, val)
    }
  }
  return root;
}

router.get('/', (req, res, next) => {
  getMenuData()
    .then(data => {
      const
        root = {id: 1132530, parentid: 0, keyValue: 'Электроника'},
        menuObj = getCats(data, root);
      res.json(menuObj);
    })
    .catch(e => {
      const err = new Error(e);
      err.status = 500;
      next(err);
    });
});

module.exports = router;
