const
  express = require('express'),
  router = express.Router(),
  mongoClient = require('mongodb').MongoClient,
  assert = require('assert'),
  mongoUrl = 'mongodb://minimus:Reload1962@ds137230.mlab.com:37230/sinplelib-data';

function prpareId(id) {
  return id.split('--').map(e => parseInt(e), 10);
}

async function getCatData(id) {
  const db = await mongoClient.connect(mongoUrl);
  try {
    const coll = db.collection('categories');
    return await coll.findOne({id: id});
  }
  catch (e) {
    return Promise.reject(new Error(e));
  }
  finally {
    db.close();
  }
}

async function getOfferData(id) {
  const db = await mongoClient.connect(mongoUrl);
  try {
    const cats = db.collection('categories');
    const offers = db.collection('offers');
    const offer = await offers.findOne({id: id}, {categoryid: 1, id: 1, name: 1});
    return {offer, cat: await cats.findOne({id: offer.categoryid}, {id: 1, keyValue: 1})}
  }
  catch (e) {
    return Promise.reject(new Error(e));
  }
  finally {
    db.close()
  }
}

async function getCompareData(ids) {
  const db = await mongoClient.connect(mongoUrl);
  try {
    const cats = db.collection('categories');
    const offers = db.collection('offers');
    const items = await offers.find({id: {$in: ids}}, {categoryid: 1, id: 1, name: 1}).toArray();
    return {items, cat: await cats.findOne({id: items[0].categoryid}, {id: 1, keyValue: 1})}
  }
  catch (e) {
    return Promise.reject(new Error(e))
  }
  finally {
    db.close()
  }
}

router.get('/:item/:id', (req, res, next) => {
  const
    item = req.params.item,
    id = (item === 'comparison') ? prpareId(req.params.id) : parseInt(req.params.id, 10);

  if (item === 'category') {
    getCatData(id)
      .then(data => res.json({
        category: {
          id: data.id,
          link: `/category/${data.id}/1`,
          name: data.keyValue
        },
        offer: {
          id: -1,
          link: '',
          name: ''
        }
      }))
      .catch(e => {
        const err = new Error(e);
        err.status = 404;
        next(err);
      })
  }
  else if (item === 'offer') {
    getOfferData(id)
      .then(data => res.json({
        category: {
          id: data.cat.id,
          link: `/category/${data.cat.id}/1`,
          name: data.cat.keyValue
        },
        offer: {
          id: data.offer.id,
          link: `/offer/${data.offer.id}`,
          name: data.offer.name
        }
      }))
      .catch(e => {
        const err = new Error(e);
        err.status = 404;
        next(err);
      })
  }
  else if (item === 'comparison') {
    getCompareData(id)
      .then(data => res.json({
        category: {
          id: data.cat.id,
          link: `/category/${data.cat.id}/1`,
          name: data.cat.keyValue
        },
        offer: {
          id: id[0],
          link: `/comparison/${id.join('--')}`,
          name: data.items.map(e => e.name.split(',')[0]).join(' * ')
        }
      }))
      .catch(e => {
        const err = new Error(e);
        err.status = 404;
        next(err);
      })
  }
  else {
    const err = new Error('Bad input data...');
    err.status = 500;
    next(err);
  }
});

module.exports = router;
