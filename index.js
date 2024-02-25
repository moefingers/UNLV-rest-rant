// Modules and Globals
require('dotenv').config()
const express = require('express')
const app = express()

const mongoose = require('mongoose');

const methodOverride = require('method-override');



// Express Settings
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use(methodOverride('_method'));
app.set('views', __dirname + '/views')
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())


// Database Connection
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
module.exports.Place = require('./models/places')

// Controllers & Routes
app.use('/places', require('./controllers/places'))

app.get('/', (req, res) => {
    res.render('home')
})

app.get('*', (req, res) => {
    res.render('error404')
})


// Listen for Connections
app.listen(process.env.PORT, () => {
    console.log(`Server running on ${process.env.PORT}`)
})
