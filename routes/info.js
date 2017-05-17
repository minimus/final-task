const express = require('express');

const router = express.Router();

function prpareId(id) {
  return id.split('--').map(e => parseInt(e, 10));
}

async function getCatData(db, id) {
  try {
    const coll = db.collection('categories');
    return await coll.findOne({ id });
  } catch (e) {
    throw e;
  }
}

async function getOfferData(db, id) {
  try {
    const cats = db.collection('categories');
    const offers = db.collection('offers');
    const offer = await offers.findOne({ id }, { categoryid: 1, id: 1, name: 1 });
    return { offer, cat: await cats.findOne({ id: offer.categoryid }, { id: 1, keyValue: 1 }) };
  } catch (e) {
    throw e;
  }
}

async function getCompareData(db, ids) {
  try {
    const cats = db.collection('categories');
    const offers = db.collection('offers');
    const items = await offers
      .find({ id: { $in: ids } }, { categoryid: 1, id: 1, name: 1 })
      .toArray();
    return { items, cat: await cats.findOne({ id: items[0].categoryid }, { id: 1, keyValue: 1 }) };
  } catch (e) {
    throw e;
  }
}

router.get('/:item/:id', (req, res, next) => {
  const db = req.app.locals.db;
  const item = req.params.item;
  const id = (item === 'comparison') ? prpareId(req.params.id) : parseInt(req.params.id, 10);

  if (item === 'category') {
    getCatData(db, id)
      .then(data => res.json({
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
      }))
      .catch((e) => {
        const err = new Error(e);
        err.status = 404;
        next(err);
      });
  } else if (item === 'offer') {
    getOfferData(db, id)
      .then(data => res.json({
        category: {
          id: data.cat.id,
          link: `/category/${data.cat.id}/1`,
          name: data.cat.keyValue,
        },
        offer: {
          id: data.offer.id,
          link: `/offer/${data.offer.id}`,
          name: data.offer.name,
        },
      }))
      .catch((e) => {
        const err = new Error(e);
        err.status = 404;
        next(err);
      });
  } else if (item === 'comparison') {
    getCompareData(db, id)
      .then(data => res.json({
        category: {
          id: data.cat.id,
          link: `/category/${data.cat.id}/1`,
          name: data.cat.keyValue,
        },
        offer: {
          id: id[0],
          link: `/comparison/${id.join('--')}`,
          name: data.items.map(e => e.name.split(',')[0]).join(' * '),
        },
      }))
      .catch((e) => {
        const err = new Error(e);
        err.status = 404;
        next(err);
      });
  } else {
    const err = new Error('Bad input data...');
    err.status = 500;
    next(err);
  }
});

module.exports = router;
