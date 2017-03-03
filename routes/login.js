var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  var menu_link = 'menu';
  res.render('login', { title: 'Express', menu : menu_link });
});

module.exports = router;
