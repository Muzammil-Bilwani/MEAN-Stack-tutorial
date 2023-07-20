const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello From Our Server!')
})

app.get("/books",(req,res)=>{
    res.json({
        success: true,
        data: [
            {
                id: 1,
                title: "Harry Potter",
            },
            {
                id: 2,
                title: "Lord of the Rings",
            },
        ]
    })
})

app.listen(port, () => {
  console.log(`Server app listening on port ${port}`)
})