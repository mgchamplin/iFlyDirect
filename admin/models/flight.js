// require Mongoose
const mongoose = require("mongoose");

// Declare Schema for defining a place.
const flightSchema = new mongoose.Schema({
  from_id:        { type: mongoose.Schema.Types.ObjectId, ref:"Location", required: true},
  from_city:      { type: String,   default: "City" },

  to_id:          { type: mongoose.Schema.Types.ObjectId, ref:"Location", required: true},
  to_city:        { type: String,   default: "City" },
  
  airline:        { type: String,   default: "TWA"},

  adult_price:    { type: Number, default: 200 },
  child_price:    { type: Number, default: 150 },

  departure_date: { type: Date, required: true },
  arrival___date: { type: Date, required: true },

  round_trip:     { type: Boolean, default: false }
});


// Export
module.exports = mongoose.model("Flight", flightSchema);