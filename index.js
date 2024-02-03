require("dotenv").config()
const express = require("express")
const app = express()

//const path = require("path")


//app.use(express.static('public'))

app.get("/", (req,res) => {
    res.send("hello restaurant world")
})

// app.get("*", (req,res) => {
//     res.sendFile(path.join(__dirname, 'public/nord404.tsparticles/nord/404.html'))
// })

app.get("*", (req,res) => {
    res.status(404).send(`the most definitely happy and certainly not unhappy 404`)
})



app.listen(process.env.PORT, () => {
    console.log(`server is running on ${process.env.PORT}`)
})