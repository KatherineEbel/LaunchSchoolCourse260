const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');

/* GET home page. */
router.get('/', function(req, res, next) {
  const dataPath = path.resolve(path.dirname(__dirname), 'public/javascripts/products.json');
  console.log(dataPath)
  const products = fs.readFileSync(dataPath, {encoding: 'utf8'});
  res.render('index', {
    products:JSON.parse(products)
  });
});

module.exports = router;
