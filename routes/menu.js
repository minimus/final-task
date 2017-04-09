/**
 * Created by Константин on 09.04.2017.
 */
const express = require('express'),
  router = express.Router(),
  mongoClient = require('mongodb').MongoClient,
  assert = require('assert'),
  //ObjectId = require('mongodb').ObjectID,
  mongoUrl = 'mongodb://minimus:Reload1962@ds137230.mlab.com:37230/sinplelib-data';

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

async function getData(req, res, next) {
  const
    root = {id: 1132530, parentid: 0, keyValue: 'Электроника'},
    db = await mongoClient.connect(mongoUrl);

  try {
    const cats = db.collection('categories');
    const menuData = await cats.find().toArray();
    const menuObj = getCats(menuData, root);
    res.json(menuObj);
  }
  finally {
    db.close();
  }
}

router.get('/', getData);

module.exports = router;