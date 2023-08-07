const mongoose = require("mongoose")

const studentSchema = new mongoose.Schema({
  name: String,
  age: Number,
  teacher: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Teacher"
  }
})

const Student = mongoose.model("Student", studentSchema)

module.exports = Student
