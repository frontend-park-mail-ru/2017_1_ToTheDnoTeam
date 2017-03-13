const fs = require('fs')
const jade = require('jade');
const path = require('path')


const about_compiled_func = jade.compileFileClient('../templates/about.jade', {name: "about"});
fs.writeFile(__dirname + "/../public/javascripts/about_tpl.js", about_compiled_func, function (err) {
    if (err) return console.log(err);
});


const game_compiled_func = jade.compileFileClient('../templates/game.jade', {name: "game"});
fs.writeFile(__dirname + "/../public/javascripts/game_tpl.js", game_compiled_func, function (err) {
    if (err) return console.log(err);
});


const login_compiled_func = jade.compileFileClient('../templates/login.jade', {name: "login"});
fs.writeFile(__dirname + "/../public/javascripts/login_tpl.js", login_compiled_func, function (err) {
    if (err) return console.log(err);
});


const menu_compiled_func = jade.compileFileClient('../templates/menu.jade', {name: "menu"});
fs.writeFile(__dirname + "/../public/javascripts/menu_tpl.js", menu_compiled_func, function (err) {
    if (err) return console.log(err);
});


const registration_compiled_func = jade.compileFileClient('../templates/registration.jade', {name: "registration"});
fs.writeFile(__dirname + "/../public/javascripts/registration_tpl.js", registration_compiled_func, function (err) {
    if (err) return console.log(err);
});


const stats_compiled_func = jade.compileFileClient('../templates/stats.jade', {name: "stats"});
fs.writeFile(__dirname + "/../public/javascripts/stats_tpl.js", stats_compiled_func, function (err) {
    if (err) return console.log(err);
});
