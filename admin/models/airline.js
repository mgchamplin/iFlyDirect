// require Mongoose
const mongoose = require("mongoose");

// Declare Schema for defining a place.
const airlineSchema = new mongoose.Schema({
  airline: { type: String, default: "Airline",
  unique: true
},
});


// Export
module.exports = mongoose.model("Airline", airlineSchema);