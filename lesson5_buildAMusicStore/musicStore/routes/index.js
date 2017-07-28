const path = require('path');
const fs = require('fs');
const filePath = path.resolve(path.dirname(__dirname), 'data/albums.json');
const Albums = require(path.resolve(path.dirname(__dirname), 'modules/albums'));



module.exports = (router) => {
  /* GET home page. */
  router.get('/', (req, res, next) => {
    res.render('index', {
      title: 'Music Store',
      albums: Albums.get()
    });
  });

};
