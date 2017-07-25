var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  let navLocals = {
    title: 'Home',
    links: [
      {title: 'Home', href: '/', active: true},
      {title: 'Contact', href: '/'},
      {title: 'About', href: '/'},
    ]
  }
  res.render('index', navLocals);
});

module.exports = router;
