// require models folder to give CRUD access to database in models
const db = require("../models");


var startDate = new Date("2022-8-17"); //YYYY-MM-DD
var endDate = new Date("2022-9-15"); //YYYY-MM-DD

// Create date array
var getDateArray = function(start, end) {
    var arr = new Array();
    var dt = new Date(start);
    while (dt <= end) {
        arr.push(new Date(dt));
        dt.setDate(dt.getDate() + 1);
    }
    return arr;
}

var dateArr = getDateArray(startDate, endDate);

var allLocations = await db.Location.find();

// create a new flight with create().
async function toAirport() {
    for (let i = 0; i < allLocations.length - 1; i++){
        db.Flight.create([
            {
              from: allLocations[i],
              to: allLocations[i+1],
              price: Math.floor(Math.random()*900)+100,
              date: dateArr,
              roundTrip: false
            }
            
          ]).then(() => {
              console.log("Success!");
              process.exit(); //To close process
            }).catch((err) => {
              console.log("Failure!", err);
              process.exit(); // To close process
            });
    }
};
toAirport();

//reverse for loop for from airport
async function fromAirport() {
    for (let i = allLocations.length; i != 0; i--){
        db.Flight.create([
            {
              from: allLocations[i],
              to: allLocations[i-1],
              price: Math.floor(Math.random()*900)+100,
              date: dateArr,
              roundTrip: false
            }
            
          ]).then(() => {
              console.log("Success!");
              process.exit(); //To close process
            }).catch((err) => {
              console.log("Failure!", err);
              process.exit(); // To close process
            });
    }
};
fromAirport();