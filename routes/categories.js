/**
 * Created by Константин on 23.04.2017.
 */
const
  express = require('express'),
  router = express.Router(),
  mongoClient = require('mongodb').MongoClient,
  assert = require('assert'),
  mongoUrl = 'mongodb://minimus:Reload1962@ds137230.mlab.com:37230/sinplelib-data',
  offersOnPage = 20;

function prepareFilter(filter) {
  if (!filter) return [];

  const filterz = JSON.parse(filter);

  const vendors = [];
  const countries = [];
  const params = [];

  for (const val of filterz) {
    if (val.field === 'vendor') {
      vendors.push(val.value);
    }
    else if (val.field === 'country_of_origin') {
      countries.push(val.value)
    }
    else {
      const idx = params.findIndex(e => e.name === val.name);
      if (idx === -1) params.push({name: val.name, values: [val.value]});
      else params[idx].values.push(val.value);
    }
  }

  const matches = [];
  if (vendors.length) matches.push({$match: {vendor: {$in: vendors}}});
  if (countries.length) matches.push({$match: {country_of_origin: {$in: countries}}});
  if (params.length) {
    for (const param of params) {
      matches.push({$match: {$and: [{"param.name": param.name}, {"param.keyValue": {$in: param.values}}]}})
    }
  }

  return matches;
}

async function getData(cat, page, sort, filter) {
  const sortOrder = {};
  let skip = offersOnPage * (page - 1);

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
      sortOrder['$natural'] = 1
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
        param: 1
      }
    },
    {$match: {categoryid: cat}},
    ...matches,
    {$project: {id: 1, group_id: 1, url: 1, price: 1, picture: 1, name: 1}},
    {$sort: sortOrder},
    {$skip: skip},
    {$limit: offersOnPage}
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
        param: 1
      }
    },
    {$match: {categoryid: cat}},
    ...matches,
    {$project: {_id: 1, s: {$literal: 1}}},
    {$group: {_id: "$s", count: {$sum: "$s"}}}
  ];

  const db = await mongoClient.connect(mongoUrl);
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
      category: await cats.findOne({id: cat})
    }
  }
  catch (e) {
    return Promise.reject(e);
  }
  finally {
    db.close();
  }
}

router.get('/:category/:page', (req, res, next) => {
  const
    cat = parseInt(req.params.category, 10),
    page = parseInt(req.params.page, 10),
    sort = req.query.sort,
    filter = req.query.filter;
  getData(cat, page, sort, filter)
    .then(data => res.json(data))
    .catch(e => {
      const err = new Error(e);
      err.status = 404;
      next(err);
    });
});

module.exports = router;