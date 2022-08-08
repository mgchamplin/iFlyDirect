// Modules and Globals
require('dotenv').config()
const express = require('express')
const app = express()
const methodOverride = require('method-override')

// Express Settings
app.set('views', __dirname + '/views')
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use(methodOverride('_method'))


// Controllers & Routes
app.use('/', require('./controllers/users'))
app.use('/', require('./controllers/flights'))


console.log("Listening on Port " + process.env.PORT + " (set in your .env file)")
app.listen(process.env.PORT)              