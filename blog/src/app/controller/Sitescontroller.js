const Course = require('../model/course');
const { mutipleMongooseToObject } = require('../../util/mongoose');
class sitescontroller {
    index(req, res, next) {
        Course.find()
            .then((data) => {
                res.render('home', {
                    data: mutipleMongooseToObject(data),
                });
            })
            .catch(next);
    }
    search(req, res) {
        res.render('search');
    }
    show(req, res) {
        res.render('home');
    }
}

module.exports = new sitescontroller();
