/**
 * Created by me on 27.02.17.
 */

var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next){
    res.render('about', {})
});

module.exports = router;

