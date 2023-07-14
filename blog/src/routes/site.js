const express = require('express');
const siterouter = express.Router();

const newscontroller = require('../app/controller/Sitescontroller');

siterouter.get('/search', newscontroller.search);
siterouter.get('/:slug', newscontroller.show);
siterouter.get('/', newscontroller.index);

module.exports = siterouter;
