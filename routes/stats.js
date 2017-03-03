/**
 * Created by me on 27.02.17.
 */

var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next){
    stats = {
        'lorem' : 'ipsum',
        'lorem1' : 'ipsum1',
        'lorem2' : 'ipsum2',
        'lorem3' : 'ipsum3'
    };
    res.render('stats', { stats: stats})
});

module.exports = router;
