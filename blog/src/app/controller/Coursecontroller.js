const Course = require('../model/course');
const { mongooseToObject } = require('../../util/mongoose');
class Coursecontroller {
    show(req, res, next) {
        Course.findOne({ slug: req.params.slug })
            .then((data) =>
                res.render('courses/show', { data: mongooseToObject(data) })
            )
            .catch(next);
    }

    create(req, res, next) {
        res.render('courses/create')
    }

    store(req, res, next) {
        const fromdata = req.body;
        fromdata.image = `https://img.youtube.com/vi/${fromdata.videoId}/sddefault.jpg`
        const course = new Course(fromdata);
        course.save()
            .then(() => res.redirect('/'))
            .then(() => res.redirect('/me/stored/courses'))
            .catch((error) => { })

    }

    edit(req, res, next) {
        Course.findById(req.params.id)
            .then((data) =>
                res.render('courses/edit', { data: mongooseToObject(data) })
            )
            .catch(next)
    }

    update(req, res, next) {
        Course.updateOne({ _id: req.params.id }, req.body)
            .then(() => res.redirect('/me/stored/courses'))
            .catch(next)
    }

    destroy(req, res, next) {
        Course.delete({ _id: req.params.id })
            .then(() => res.redirect('back'))
            .catch(next)
    }

    forceDestroy(req, res, next) {
        Course.deleteOne({ _id: req.params.id })
            .then(() => res.redirect('back'))
            .catch(next)
    }

    restore(req, res, next) {
        Course.restore({ _id: req.params.id })
            .then(() => res.redirect('back'))
            .catch(next)

    }

}

module.exports = new Coursecontroller();
