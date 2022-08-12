require("dotenv").config();

const mongoose = require("mongoose");

mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser:    true, 
    useUnifiedTopology: true,
  });

module.exports.Location = require("./location");
module.exports.Flight = require("./flight");
module.exports.User = require('./user');