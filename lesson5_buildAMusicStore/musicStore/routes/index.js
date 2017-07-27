const express = require('express');
const path = require('path');
const fs = require('fs');
const filePath = path.resolve(path.dirname(__dirname), 'data/albums.json');
const router = express.Router();

let getAlbums = () => JSON.parse(fs.readFileSync(filePath, 'utf8'))

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {
    title: 'Music Store',
    albums: getAlbums()
  });
});

module.exports = router;
