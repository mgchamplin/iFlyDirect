// require Mongoose
const mongoose = require("mongoose");

// Declare Schema for defining a place.
const flightSchema = new mongoose.Schema({
  from: { 
    type: mongoose.Schema.Types.ObjectId,
    ref:"Location",
    require: true
  },
  to: { 
    type: mongoose.Schema.Types.ObjectId,
    ref:"Location",
    require: true
  },
  price: { type: Number, default: 200 },
  date: { type: Date, require: true },
  roundTrip: { type: Boolean, default: false }
});


// Export
module.exports = mongoose.model("Flight", flightSchema);