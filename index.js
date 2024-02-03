require("dotenv").config()
const express = require("express")
const app = express()

app.get("/", (req,res) => {
    res.send("hello restaurant world")
})

app.listen(process.env.PORT, () => {
    console.log(`server is running on ${process.env.PORT}`)
})