const express = require('express');

const router = express.Router();

function prepareFilter(filter) {
  if (!filter) return [];

  const filterz = JSON.parse(filter);

  const vendors = [];
  const countries = [];
  const params = [];

  filterz.forEach((val) => {
    if (val.field === 'vendor') {
      vendors.push(val.value);
    } else if (val.field === 'country_of_origin') {
      countries.push(val.value);
    } else {
      const idx = params.findIndex(e => e.name === val.name);
      if (idx === -1) params.push({ name: val.name, values: [val.value] });
      else params[idx].values.push(val.value);
    }
  });

  const matches = [];
  if (vendors.length) matches.push({ $match: { vendor: { $in: vendors } } });
  if (countries.length) matches.push({ $match: { country_of_origin: { $in: countries } } });
  params.forEach(param => matches.push({ $match: { $and: [{ 'param.name': param.name }, { 'param.keyValue': { $in: param.values } }] } }));

  return matches;
}

async function getData(db, cat, page, offersOnPage, sort, filter) {
  const sortOrder = {};
  const skip = offersOnPage * (page - 1);

  switch (sort) {
    case 'priceMin':
      sortOrder.price = 1;
      break;
    case 'priceMax':
      sortOrder.price = -1;
      break;
    case 'name':
      sortOrder.name = 1;
      break;
    default:
      sortOrder.$natural = 1;
  }

  const matches = prepareFilter(filter);

  const aggregators = [
    {
      $project: {
        categoryid: 1,
        id: 1,
        group_id: 1,
        vendor: 1,
        country_of_origin: 1,
        url: 1,
        price: 1,
        picture: 1,
        name: 1,
        param: 1,
      },
    },
    { $match: { categoryid: cat } },
    ...matches,
    { $project: { id: 1, group_id: 1, url: 1, price: 1, picture: 1, name: 1 } },
    { $sort: sortOrder },
    { $skip: skip },
    { $limit: offersOnPage },
  ];

  const countAggergators = [
    {
      $project: {
        categoryid: 1,
        id: 1,
        group_id: 1,
        vendor: 1,
        country_of_origin: 1,
        url: 1,
        price: 1,
        picture: 1,
        name: 1,
        param: 1,
      },
    },
    { $match: { categoryid: cat } },
    ...matches,
    { $project: { _id: 1, s: { $literal: 1 } } },
    { $group: { _id: '$s', count: { $sum: '$s' } } },
  ];

  try {
    const goods = db.collection('offers');
    const cats = db.collection('categories');
    return {
      status: true,
      list: await goods.aggregate(aggregators).toArray(),
      count: await goods.aggregate(countAggergators).toArray(),
      page,
      offersOnPage,
      categoryId: cat,
      category: await cats.findOne({ id: cat }),
    };
  } catch (e) {
    throw e;
  }
}

router.get('/:category/:page', (req, res, next) => {
  const db = req.app.locals.db;
  const offersOnPage = req.app.locals.offersOnPage;
  const cat = parseInt(req.params.category, 10);
  const page = parseInt(req.params.page, 10);
  const sort = req.query.sort;
  const filter = req.query.filter;
  getData(db, cat, page, offersOnPage, sort, filter)
    .then(data => res.json(data))
    .catch((e) => {
      const err = new Error(e);
      err.status = 404;
      next(err);
    });
});

module.exports = router;
