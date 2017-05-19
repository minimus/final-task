const express = require('express')

const router = express.Router()

async function getData(db, ids) {
  const goods = db.collection('offers')
  return {
    status: true,
    data: await goods.find({ id: { $in: ids } }).toArray(),
    params: await goods.distinct('param.name', { id: { $in: ids } }),
  }
}

router.get('/:items', (req, res, next) => {
  const db = req.app.locals.db
  const items = req.params.items.split('--').map(e => parseInt(e, 10))
  getData(db, items)
    .then(data => res.json(data))
    .catch((e) => {
      const err = new Error(e)
      err.status = 404
      next(err)
    })
})

module.exports = router
