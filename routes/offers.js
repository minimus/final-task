const
  express = require('express'),
  router = express.Router(),
  mongoClient = require('mongodb').MongoClient,
  assert = require('assert'),
  mongoUrl = 'mongodb://minimus:Reload1962@ds137230.mlab.com:37230/sinplelib-data';

async function getData(offer) {
  const db = await mongoClient.connect(mongoUrl);
  try {
    const goods = db.collection('offers');
    return {
      status: true,
      data: await goods.findOne({id: offer}, {
        id: 1,
        available: 1,
        url: 1,
        price: 1,
        categoryid: 1168060,
        picture: 1,
        store: 1,
        pickup: 1,
        delivery: 1,
        local_delivery_cost: 1,
        name: 1,
        vendor: 1,
        vendorcode: 1,
        description: 1,
        sales_notes: 1,
        manufacturer_warranty: 1,
        country_of_origin: 1,
        weight: 1,
        dimensions: 1,
        param: 1
      })
    }
  }
  catch (e) {
    return Promise.reject(e);
  }
  finally {
    db.close();
  }
}

router.get('/:offer', (req, res, next) => {
  let offer = parseInt(req.params.offer, 10);
  getData(offer)
    .then(data => res.json(data))
    //.catch(e => res.json({status: false, error: e}));
    .catch(e => {
      const err = new Error(e);
      err.status = 404;
      next(err);
    })
});

module.exports = router;
