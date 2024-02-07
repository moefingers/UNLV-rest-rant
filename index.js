require("dotenv").config()


const app = require("express")()

app.set('view engine','jsx')
app.engine('jsx', require('express-react-views').createEngine())



app.use("/places", require("./controllers/places"))

app.get("/", (req,res) => {
    res.render("home")
})

app.get("*", (req,res) => {
    res.render("error404")
})

app.listen(process.env.PORT, () => {
    console.log(`server is running on ${process.env.PORT}`)
})