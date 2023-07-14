const Course = require('../model/course');
const { mutipleMongooseToObject } = require('../../util/mongoose');

class Mecontroller {
    // [GET] /me/stored/courses

    storedCourse(req, res, next) {
        Promise.all([Course.find({}), Course.countDocumentsDeleted()])
            .then(([data, deletedCount]) => res.render('me/stored-courses', {
                deletedCount,
                data: mutipleMongooseToObject(data),
            }))
            .catch(next)
    }
    // [GET] /me/trash/courses
    trashCourses(req, res, next) {
        Course.findDeleted()
            .then(data => {
                return res.render('me/trash-courses', {
                    data: mutipleMongooseToObject(data),
                })
            })
            .catch(next);
    }
}

module.exports = new Mecontroller();
