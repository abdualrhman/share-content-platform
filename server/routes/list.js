var express = require('express');
var router = express.Router();

var knex  = require('../helpers/knex');


router.get('/', function(req, res, next) {
  const query = req.query
  if (query.itemId){
    console.log(req.query + '' + req.query.item)
    return knex().from('items').select()
    .where({'items.id': query.itemId})
    .then( function(data) {
      const [newData]= data
      res.send(newData);
    });
  }
  if (query.category){
    return knex.select('items.id', 'items.title','items.description', 'items.link','items.category_id', 'items.type_id', 'items.difficulty_id', 'items.rate_down', 'items.rate_up')
    .from('items').innerJoin('category', 'items.category_id', 'category.id')
    .where({'category.id' :query.category})
    .then( function(data) {
      console.log(data)
      res.send(data);
    })
  }
  knex('items').select().then( function(data) {
    res.send(data);
  });
});

module.exports = router;
