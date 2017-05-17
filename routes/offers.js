const express = require('express');

const router = express.Router();

async function getData(db, offer) {
  const goods = db.collection('offers');
  return {
    status: true,
    data: await goods.findOne({ id: offer }, {
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
      param: 1,
    }),
  };
}

router.get('/:offer', (req, res, next) => {
  const db = req.app.locals.db;
  const offer = parseInt(req.params.offer, 10);
  getData(db, offer)
    .then(data => res.json(data))
    .catch((e) => {
      const err = new Error(e);
      err.status = 404;
      next(err);
    });
});

module.exports = router;
