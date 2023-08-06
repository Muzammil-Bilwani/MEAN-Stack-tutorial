const express = require("express")
const app = express()
const port = 3000

const authorize = (req, res, next) => {
  if (req.headers.token === "123" || req.headers.token === "456") {
    next()
  } else {
    res.status(401).json({
      success: false,
      message: "You are not authenticated"
    })
  }
}

const authenticate = (req, res, next) => {
  if (req.headers.token === "456") {
    next()
  } else {
    res.status(401).json({
      success: false,
      message: "You are not authorized"
    })
  }
}

app.get("/", authorize, (req, res) => {
  res.send("Hello From Our Server!")
})

app.get("/books", authenticate, authorize, (req, res) => {
  res.json({
    success: true,
    data: [
      {
        id: 1,
        title: "Harry Potter"
      },
      {
        id: 2,
        title: "Lord of the Rings"
      }
    ]
  })
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
