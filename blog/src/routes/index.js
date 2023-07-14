const newRouter = require('./news');
const meRouter = require('./me');
const CoursesRouter = require('./courses');
const siteRouter = require('./site');

function routes(app) {
    app.use('/news', newRouter);
    app.use('/me', meRouter);
    app.use('/courses', CoursesRouter);
    app.use('/', siteRouter);
}

module.exports = routes;
