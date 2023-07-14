const express = require('express');
const router = express.Router();

const mecontroller = require('../app/controller/Mecontroller');

router.get('/stored/courses', mecontroller.storedCourse)
router.get('/trash/courses', mecontroller.trashCourses)
 
module.exports = router;
