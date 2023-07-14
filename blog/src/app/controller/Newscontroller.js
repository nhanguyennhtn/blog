class Newscontroller {
    index(req, res) {
        res.render('news');
    }

    show(req, res) {
        res.send('hello work!!');
    }
}

module.exports = new Newscontroller();
