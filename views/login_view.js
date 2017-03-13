function render(req, res, next) {
    const menu_link = '#menu';
    res.render('login');
}


module.exports = {
    render: render
};
