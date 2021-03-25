const express = require("express");
const Courses = require("../models/course");
const router = express.Router();
const {getCourses, getCourse,searchResult,addCourse } = require("../controllers/course-controller");

router.get("/",getCourses)
router.get("/Course/:id", getCourse);
router.post("/", addCourse);
router.post("/search", searchResult);

module.exports = router;
