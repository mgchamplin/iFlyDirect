// require models folder to give CRUD access to database in models
const db = require("../models");

// Flight will be from LAX to London
    // Find LAX location and set as from location
    // Find London location and set as to location
// Flights price will be $200
// Flights departure date will be 8/15/22
// Flights arrival date will be 8/16/22
// Flight not a round trip
// Create a flight

async function airport() {
    var allLocations = await db.Location.find();
    let to = allLocations[Math.floor(Math.random()*allLocations.length)];
    let from = allLocations[Math.floor(Math.random()*allLocations.length)];
    let adultPrice = Math.floor(Math.random() * 900) + 100;
    let childPrice = adultPrice * 0.7;
    let departureDate = new Date();
    departureDate.setDate(departureDate.getDate()+Math.floor(Math.random() * 30)+ 1);
    let roundTrip = Math.random() > 0.5 ? true : false;

    let flight = db.Flight.create({
        from: from,
        to: to,
        adultPrice: adultPrice,
        childPrice: childPrice,
        departureDate: departureDate,
        roundTrip: roundTrip
    });
};

airport();