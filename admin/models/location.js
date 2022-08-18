// require Mongoose
const mongoose = require("mongoose");

// Declare Schema for defining a place.
const locationSchema = new mongoose.Schema({
  city:       { type: String,   default: "City" },
  state:      { type: String,   default: "State" },
  state_abbv: { type: String,   default: "State Abbv"},
  region:     { type: String,   default: "Region" },
  airport:    { type: String,   default: "Airport", unique: true},
});

// Export
module.exports = mongoose.model("Location", locationSchema);