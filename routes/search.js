const
  express = require('express'),
  router = express.Router(),
  mongoClient = require('mongodb').MongoClient,
  assert = require('assert'),
  mongoUrl = 'mongodb://minimus:Reload1962@ds137230.mlab.com:37230/sinplelib-data';

const offersOnPage = 20;

const include = [
  "Страна бренда",
  "Цвет",
  "Год выпуска",
  "Материал корпуса",
  "Гарантия"
];

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

async function getData(phrase, page, include, filter) {
  let skip = offersOnPage * (page - 1);

  const matches = prepareFilter(filter);

  const aggregator = [
    {$match: {$text: {$search: phrase}}},
    {$sort: {scope: {$meta: "textScore"}}},
    ...matches,
    {$project: {id: 1, categoryid: 1, name: 1, description: 1, url: 1, picture: 1, vendor: 1, price: 1, country_of_origin: 1}},
    {$skip: skip},
    {$limit: offersOnPage}
  ];

  const countAggr = [
    {$match: {$text: {$search: phrase}}},
    ...matches,
    {$group: {_id: null, count: {$sum: 1}}}
  ];

  const facetsAggr = [
    {$match: {$text: {$search: phrase}}},
    ...matches,
    {$unwind: "$param"},
    {$match: {"param.name": {$in: include}}},
    {$group: {_id: "$param.name", values: {$addToSet: "$param.keyValue"}}},
    {$project: {_id: 0, facet: "$_id", field: {$literal: 'param'}, values: 1}}
  ];

  const countryAggr = [
    {$match: {$text: {$search: phrase}}},
    ...matches,
    {$project: {name: {$literal: "Страна производства"}, country_of_origin: 1}},
    {$group: {_id: "$name", values: {$addToSet: "$country_of_origin"}}},
    {$project: {_id: 0, facet: "$_id", field: {$literal: 'country_of_origin'}, values: 1}}
  ];

  const db = await mongoClient.connect(mongoUrl);

  try {
    const goods = db.collection('offers');
    const cats = db.collection('categories');
    return {
      data: await goods.aggregate(aggregator).toArray(),
      cats: await cats.find({}, {id: 1, keyValue: 1}).toArray(),
      count: await goods.aggregate(countAggr).toArray(),
      facets: await goods.aggregate(facetsAggr).toArray(),
      vendor: await goods.aggregate([
        {$match: {$text: {$search: phrase}}},
        {$project: {name: {$literal: "Бренд"}, vendor: 1}},
        {$group: {_id: "$name", values: {$addToSet: "$vendor"}}},
        {$project: {_id: 0, facet: "$_id", field: {$literal: 'vendor'}, values: 1}}
      ]).toArray(),
      country: await goods.aggregate(countryAggr).toArray(),
      phrase,
      page,
      offersOnPage
    };
  }
  catch (e) {
    return Promise.reject(e);
  }
  finally {
    db.close();
  }
}

router.get('/:phrase/:page', (req, res, next) => {
  let
    phrase = decodeURIComponent(req.params.phrase),
    page = parseInt(req.params.page, 10),
    filter = req.query.filter;

  getData(phrase, page, include, filter)
    .then(data => res.json(data))
    .catch(e => {
      const err = new Error(e);
      err.status = 404;
      next(err);
    })
});

module.exports = router;
