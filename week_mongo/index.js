const mongoose = require("mongoose")
const express = require("express")
const Student = require("./Student")
const Teacher = require("./Teacher")

const app = express()
const port = 3000

app.use(express.json())

mongoose.connect(
  "mongodb+srv://cacefi7498:IyFasSeP0jgBoOLZ@cluster0.kxcmuuj.mongodb.net/",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
)

app.get("/", async (req, res) => {
  try {
    await Teacher.create({
      name: "Jabbir",
      age: 20
    })
    res.send("Hello From Our Server!")
  } catch (error) {
    console.log(error)
  }
})

app.get("/students", async (req, res) => {
  try {
    const students = await Student.find({
      teacher: "64d11f5dd3c21849222c0263"
    })
    res.json({
      success: true,
      data: students
    })
  } catch (error) {
    console.log(error)
    res.status(500).json({
      success: false,
      message: "Internal server error"
    })
  }
})

app.post("/students", async (req, res) => {
  try {
    const newStudent = new Student({
      name: req.body.name,
      age: req.body.age,
      teacher: "64d11fb51268607322e40159"
    })
    await newStudent.save()
    res.json({
      success: true
    })
  } catch (e) {
    console.log(e)
    res.status(500).json({
      success: false,
      message: "Internal server error"
    })
  }
})

app.put("/students/:id", async (req, res) => {
  try {
    await Student.findByIdAndUpdate(req.params.id, {
      name: req.body.name,
      age: req.body.age
    })
    res.json({
      success: true
    })
  } catch (e) {
    console.log(e)
    res.status(500).json({
      success: false,
      message: "Internal server error"
    })
  }
})

app.delete("/students/:id", async (req, res) => {
  try {
    await Student.findByIdAndDelete(req.params.id)
    res.json({
      success: true
    })
  } catch (e) {
    console.log(e)
    res.status(500).json({
      success: false,
      message: "Internal server error"
    })
  }
})

//  Write 404 handler
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: "Resource not found"
  })
})

app.listen(port, () => {
  console.log(`Server app listening on port ${port}`)
})

// IyFasSeP0jgBoOLZ
