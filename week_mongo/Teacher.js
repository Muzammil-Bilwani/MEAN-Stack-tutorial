const mongoose = require("mongoose")

const teacherSchema = new mongoose.Schema({
  name: String,
  age: Number
})

const Teacher = mongoose.model("Teacher", teacherSchema)

module.exports = Teacher
