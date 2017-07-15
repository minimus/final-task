const express = require('express')

const router = express.Router()

const wrap = fn => (...args) => fn(...args).catch(args[2])

router.get('/:offer', wrap(async (req, res) => {
  const offer = parseInt(req.params.offer, 10)
  const db = req.app.locals.db
  const goods = db.collection('offers')
  res.json({
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
  })
}))

module.exports = router
