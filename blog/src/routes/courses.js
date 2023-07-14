const express = require('express');
const router = express.Router();

const Coursecontroller = require('../app/controller/Coursecontroller');

router.get('/create', Coursecontroller.create);
router.post('/store', Coursecontroller.store);
router.get('/:id/edit', Coursecontroller.edit);
router.put('/:id', Coursecontroller.update);
router.patch('/:id/restore', Coursecontroller.restore);
router.delete('/:id', Coursecontroller.destroy);
router.delete('/:id/force', Coursecontroller.forceDestroy);
router.get('/:slug', Coursecontroller.show);

module.exports = router;
