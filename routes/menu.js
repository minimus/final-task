const express = require('express')

const router = express.Router()

async function getMenuData(db) {
  const cats = db.collection('categories')
  const menu = await cats.find().toArray()
  return menu
}

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

router.get('/', (req, res, next) => {
  const db = req.app.locals.db
  getMenuData(db)
    .then((data) => {
      const root = { id: 1132530, parentid: 0, keyValue: 'Электроника' }
      const menuObj = getCats(data, root)
      res.json(menuObj)
    })
    .catch((e) => {
      const err = new Error(e)
      err.status = 500
      next(err)
    })
})

module.exports = router
