const Courses = require("../models/course");

const getCourses=(req, res) => {
  Courses.find().
        then((courses) => res.json(courses)).
        catch((err) => res.status(400).json("Error: " + err))
}

const getCourse = (req, res) => {
  const id = req.params.id;
  Courses.findById(id)
    .then((course) => {
      res.json(course);
    })
    .catch((err) => res.status(404).json("Course not Found"));
};

const addCourse=(req, res) => {
  const name = req.body.name
  const rating = req.body.rating
  const details = req.body.details
  const duration = req.body.duration
  const instructor = req.body.instructor 
  const start_date = req.body.start_date  
  const course_fee = req.body.course_fee  
  const newCourse = new Courses({ name,rating,details,duration,instructor,start_date,course_fee})
  newCourse.save()
      .then(() => res.json("Course Added Successfully"))
      .catch((err) => res.status(400).json("Error: " + err))
}


const searchResult = (req, res) => {  
  let query = req.body.query;
  console.log("Searching for", query)
  Courses.find({ reg_num: { $regex: query, $options: "$i" } }).then((data) => {
    res.status(200).send(data);
  });
};

module.exports = {getCourses, getCourse,searchResult,addCourse };
