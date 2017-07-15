const express = require('express')

const router = express.Router()

const wrap = fn => (...args) => fn(...args).catch(args[2])

function getCats(data, rootNode) {
  const root = rootNode
  root.children = []
  data.forEach((val) => {
    if (val.parentid === root.id) {
      root.children.push(val)
      getCats(data, val)
    }
  })
  return root
}

router.get('/', wrap(async (req, res) => {
  const root = { id: 1132530, parentid: 0, keyValue: 'Электроника' }
  const db = req.app.locals.db
  const cats = db.collection('categories')
  const menu = getCats(await cats.find().toArray(), root)
  res.json(menu)
}))

module.exports = router
