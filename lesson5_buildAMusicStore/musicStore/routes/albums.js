const path = require('path');
const fs = require('fs');
const _ = require('underscore');
const Albums = require(path.resolve(path.dirname(__dirname), 'modules/albums'));


module.exports = (router) => {
  router.route('/albums').get((req, res) => {
    res.json(Albums().get());
  }).post((req, res) => {
    const album = req.body;
    const albums = Albums().get();
    album.id = Albums().getLastID();
    albums.push(album);
    Albums().set(albums)
    res.json(album);
  }).put((req, res) => {
    const albums = Albums().get();
    const currentAlbum = _(albums).findWhere({ id: +req.body.id });
    _.extend(currentAlbum, req.body);
    Albums().set(albums);
    res.json(currentAlbum);
  }).delete((req, res) => {
    const albums = _(Albums.get()).reject(a => a.id === +req.body.id);
    Albums().set(albums);
    res.status(200).end();
  });

  router.get('/albums/new', (req, res) => res.render('new'));

}
