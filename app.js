const express = require('express');
const app = express();
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');


const templates = require('./routes/template_generator')
const router = require('./routes/router');


app.set('views', path.join(__dirname, 'templates'));
app.set('view engine', 'jade');


app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


app.use('/', router);


app.use(function (req, res, next) {
    const err = new Error('Not Found');
    err.status = 404;
    next(err);
});


app.use(function (err, req, res, next) {
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    res.status(err.status);
    res.render('error');
});


module.exports = app;
