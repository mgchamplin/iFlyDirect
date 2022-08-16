// require models folder to give CRUD access to database in models
const db = require("../models");

async function getLocations() {
  // Get random from location
// Get random to locatiion
// Make sure locations are not the same
  var allLocations = await db.Location.find();
  var from = allLocations[Math.floor(Math.random()*allLocations.length)];
  var to = allLocations[Math.floor(Math.random()*allLocations.length)];
  while(from === to){
    to = allLocations[Math.floor(Math.random()*allLocations.length)];
  }
  var flightPath = [from, to]
  return flightPath
}

// Find airline companies and set as airline
// Flight will be from LAX to London
    // Find LAX location and set as from location
    // Find London location and set as to location
// Flights price will be $200
// Flights departure date will be 8/15/22
// Flights arrival date will be 8/16/22
// Flight not a round trip
// Create a flight
async function createFlight() {
    var locations = await getLocations()
    var allAirlines = await db.Airline.find();
    let airline = allAirlines[Math.floor(Math.random()*allAirlines.length)];
    
    let adultPrice = Math.floor(Math.random() * 900) + 100;
    let childPrice = adultPrice * 0.7;

    let departureDate = new Date();
    departureDate.setDate(departureDate.getDate()+Math.floor(Math.random() * 30)+ 1);
    
    let roundTrip = Math.random() > 0.5 ? true : false;

    let flight = await db.Flight.create([
    {
      from: locations[0],
      to: locations[1],
      airline: airline,
      adultPrice: adultPrice,
      childPrice: childPrice,
      departureDate: departureDate,
      roundTrip: roundTrip
    }
    ]).then(() => {
        console.log("Success!");
      }).catch((err) => {
        console.log("Failure!", err);
      });
      process.exit()
};

createFlight();

// for (let index = 0; index < 10; index++) {
//   createFlight();
// }