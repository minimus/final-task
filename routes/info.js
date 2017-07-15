const express = require('express')

const router = express.Router()

const wrap = fn => (...args) => fn(...args).catch(args[2])

function prpareId(id) {
  return id.split('--').map(e => parseInt(e, 10))
}

router.get('/:item/:id', wrap(async (req, res) => {
  const item = req.params.item
  const id = (item === 'comparison') ? prpareId(req.params.id) : parseInt(req.params.id, 10)
  const db = req.app.locals.db
  const cats = db.collection('categories')

  if (item === 'category') {
    const data = await cats.findOne({ id })
    res.json({
      category: {
        id: data.id,
        link: `/category/${data.id}/1`,
        name: data.keyValue,
      },
      offer: {
        id: -1,
        link: '',
        name: '',
      },
    })
  } else if (item === 'offer') {
    const offers = db.collection('offers')
    const offer = await offers.findOne({ id }, { categoryid: 1, id: 1, name: 1 })
    const cat = await cats.findOne({ id: offer.categoryid }, { id: 1, keyValue: 1 })
    res.json({
      category: {
        id: cat.id,
        link: `/category/${cat.id}/1`,
        name: cat.keyValue,
      },
      offer: {
        id: offer.id,
        link: `/offer/${offer.id}`,
        name: offer.name,
      },
    })
  } else if (item === 'comparison') {
    const ids = id
    const offers = db.collection('offers')
    const items = await offers
      .find({ id: { $in: ids } }, { categoryid: 1, id: 1, name: 1 })
      .toArray()
    const cat = await cats.findOne({ id: items[0].categoryid }, { id: 1, keyValue: 1 })
    res.json({
      category: {
        id: cat.id,
        link: `/category/${cat.id}/1`,
        name: cat.keyValue,
      },
      offer: {
        id: ids[0],
        link: `/comparison/${id.join('--')}`,
        name: items.map(e => e.name.split(',')[0]).join(' * '),
      },
    })
  }
}))

module.exports = router
