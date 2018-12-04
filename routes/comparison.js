const express = require('express')

const router = express.Router()

const wrap = fn => (...args) => fn(...args).catch(args[2])

router.get('/:items', wrap(async (req, res) => {
  const items = req.params.items.split('--').map(e => parseInt(e, 10))
  const { db } = req.app.locals
  const goods = db.collection('offers')
  res.json({
    status: true,
    data: await goods.find({ id: { $in: items } }).toArray(),
    params: await goods.distinct('param.name', { id: { $in: items } }),
  })
}))

module.exports = router
