// require models folder to give CRUD access to database in models
const db = require("../models");

// create a new place with create(). Pass in an array to create multiple places at once.
db.Location.create([
  {
    city: "Long Beach",
    airport: "Long Beach Airport",
  },
  {
    city: "Los Angeles",
    airport: "Los Angelese International Airport",
  },
  {
    city: "Honolulu",
    airport: "Daniel K. Inouye International Airport",
  },
  {
    city: "Kahului",
    airport: "Kahului Airport",
  },
  {
    city: "Las Vegas",
    airport: "Harry Reid International Airport",
  },
  {
    city: "New Orleans",
    airport: "Louis Armstrong New Orleans International Airport",
  },
  {
    city: "Miami",
    airport: "Miami International Airport",
  },
  {
    city: "New York",
    airport: "John F. Kennedy International Airport",
  }
]).then(() => {
    console.log("Success!");
    process.exit(); //To close process
  }).catch((err) => {
    console.log("Failure!", err);
    process.exit(); // To close process
  });