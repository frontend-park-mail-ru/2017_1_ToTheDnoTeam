function render(req, res, next) {
    stats = {
        'lorem': 'ipsum',
        'lorem1': 'ipsum1',
        'lorem2': 'ipsum2',
        'lorem3': 'ipsum3'
    };
    res.render('stats', {stats: stats})
}


module.exports = {
    render: render
};

