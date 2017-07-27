const path = require('path');
const fs = require('fs');
const filePath = path.resolve(path.dirname(__dirname), 'data/albums.json');

const getAlbums = () => JSON.parse(fs.readFileSync(filePath, 'utf8')).data;
const nextID = () => JSON.parse(fs.readFileSync(filePath, 'utf8')).lastID + 1;
const writeAlbums = (data) => fs.writeFileSync(filePath, JSON.stringify(data), 'utf8');

module.exports = (router) => {
  router.post('/albums', (req, res) => {
    const album = req.body;
    const albums = getAlbums();
    album.id = nextID();
    albums.push(album);
    writeAlbums({ lastID: album.id, data: albums });
    res.json(album);
  });

  router.get('/albums/new', (req, res) => res.render('new'));

}
