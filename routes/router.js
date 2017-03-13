const express = require('express');
const router = express.Router();


const index = require('./../views/index_view')
const registration = require('./../views/registration_view')
const menu = require('./../views/menu_view')
const game = require('./../views/game_view')
const about = require('./../views/about_view')
const stats = require('./../views/stats_view')
const login = require('./../views/login_view')


router.get('/', function (req, res, next) {
    index.render(req, res, next)
});


module.exports = router;
