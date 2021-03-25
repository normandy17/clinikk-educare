const mongoose = require("mongoose")
const Schema = mongoose.Schema
const courseSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    rating: {
        type: String,
        required: true
    },
    details: {
        type: String,
        required: true
    },
    duration: {
        type: String,
        required: true
    },
    instructor: {
        type: String,
        required: true
    },
    start_date: {
        type: String,
        required: true
    },  
    course_fee:{
        type: String,
        required: true        
    }
},
    {
        versionKey: false
    }
)

module.exports = mongoose.model("Courses", courseSchema)