// require Mongoose
const mongoose = require("mongoose");

// Declare Schema for defining a place.
const locationSchema = new mongoose.Schema({
  city: { type: String, default: "City" },
  airport: { type: String, default: "Airport" },
});


// Export
module.exports = mongoose.model("Location", locationSchema);