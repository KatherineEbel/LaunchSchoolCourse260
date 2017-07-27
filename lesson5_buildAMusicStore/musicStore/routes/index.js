const path = require('path');
const fs = require('fs');
const filePath = path.resolve(path.dirname(__dirname), 'data/albums.json');

let getAlbums = () => JSON.parse(fs.readFileSync(filePath, 'utf8')).data


module.exports = (router) => {
  /* GET home page. */
  router.get('/', (req, res, next) => {
    res.render('index', {
      title: 'Music Store',
      albums: getAlbums()
    });
  });

};
