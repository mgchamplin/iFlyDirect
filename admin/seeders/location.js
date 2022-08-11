// require models folder to give CRUD access to database in models
const db = require("../models");

// create a new place with create(). Pass in an array to create multiple places at once.
db.Location.create([
  {
    city: "Long Beach",
    airport: "Long Beach Airport",
  }
]).then(() => {
    console.log("Success!");
    process.exit(); //To close process
  }).catch((err) => {
    console.log("Failure!", err);
    process.exit(); // To close process
  });