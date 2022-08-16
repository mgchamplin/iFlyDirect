// require models folder to give CRUD access to database in models
const db = require("../models");

// create a new place with create(). Pass in an array to create multiple places at once.
db.Airline.create([
    {
      airline: "Spirit Airlines"
    },
    {
      airline: "JetBlue"
    },
    {
      airline: "Delta Airlines"
    },
    {
      airline: "Southwest Airlines"
    },
    {
      airline: "American Airlines"
    }
]).then(() => {
    console.log("Success!");
    process.exit(); //To close process
  }).catch((err) => {
    console.log("Failure!", err);
    process.exit(); // To close process
  });