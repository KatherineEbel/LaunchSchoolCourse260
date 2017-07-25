var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  let navLocals = {
    title: 'Web Store',
    links: [
      {title: 'Home', href: '/', active: true},
      {title: 'Contact', href: '/'},
      {title: 'About', href: '/'},
    ]
  }

  res.render('index', {title: 'Web Store'});
});

module.exports = router;
