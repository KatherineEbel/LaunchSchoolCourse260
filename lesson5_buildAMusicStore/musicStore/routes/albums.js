const path = require('path');
const fs = require('fs');
const express = require('express');
const router = express.Router();
const filePath = path.resolve(path.dirname(__dirname), 'data/albums.json');

let getAlbums = () => JSON.parse(fs.readFileSync(filePath, 'utf8'))

router.get('/albums/new', (req, res) => res.render('new'));

module.exports = router;
