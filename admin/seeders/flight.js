// require models folder to give CRUD access to database in models
const db = require("../models");

let place = await db.Location();
place.forEach(console.log);

// create a new place with create(). Pass in an array to create multiple places at once.
// db.Flight.create([
//   {
//     from: place,
//     to: place,
//     price: 300,
//     date: new Date(),
//     roundTrip: false
//   }
  
// ]).then(() => {
//     console.log("Success!");
//     process.exit(); //To close process
//   }).catch((err) => {
//     console.log("Failure!", err);
//     process.exit(); // To close process
//   });