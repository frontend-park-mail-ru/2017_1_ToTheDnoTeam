function render(req, res, next) {
    game_link = '#game';
    stats_link = '#stats';
    logout_link = '#login';
    about_link = '#about';
    res.render('menu', {game: game_link, stats: stats_link, logout: logout_link, about: about_link})
}


module.exports = {
    render: render
};
