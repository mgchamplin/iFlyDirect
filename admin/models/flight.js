// require Mongoose
const mongoose = require("mongoose");

// Declare Schema for defining a flight.
const flightSchema = new mongoose.Schema({
  from: { 
    type: mongoose.Schema.Types.ObjectId,
    ref:"Location",
    required: true
  },
  to: { 
    type: mongoose.Schema.Types.ObjectId,
    ref:"Location",
    required: true
  },
  airline: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Airline",
    required: true
  },
  adultPrice: { type: Number, default: 200 },
  childPrice: { type: Number, default: 150 },
  departureDate: { type: Date, required: true },
  returnDate: { type: Date },
  roundTrip: { type: Boolean, default: false }
});


// Export
module.exports = mongoose.model("Flight", flightSchema);