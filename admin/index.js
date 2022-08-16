// Modules and Globals
// require('dotenv').config()
const db = require("./models");
const express = require('express');
const app = express();
const methodOverride = require('method-override');
const cors = require("cors")

// Express Settings
app.set('views', __dirname + '/views');
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json())
app.use(methodOverride('_method'));
app.use(cors())

const mongoose = require('mongoose')

mongoose.connect(process.env.MONGODB_URI, {
     useNewUrlParser:    true, 
     useUnifiedTopology: true,
})

if (process.env.DEBUG==1) console.log("CONNECTING TO =" + process.env.MONGODB_URI);


// Controllers & Routes
app.use('/users', require('./controllers/users'));
app.use('/flights', require('./controllers/flights'));
app.use('/seeders', require('./controllers/seeders'));

if (process.env.DEBUG==1) console.log("Listening on Port " + process.env.PORT + " (set in your .env file)")
app.listen(process.env.PORT);