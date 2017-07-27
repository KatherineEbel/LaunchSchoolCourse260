const express = require('express');
const router = express.Router();
const path = require('path');
const routeFiles = ['index', 'albums'];

routeFiles.map(route => {
  require(path.resolve(path.dirname(__dirname), `routes/${route}`))(router);
});

module.exports = router;
