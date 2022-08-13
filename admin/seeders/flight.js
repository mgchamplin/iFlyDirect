// require models folder to give CRUD access to database in models
const db = require("../models");

// create a new flight with create().
async function airport() {
    let allLocations = await db.Location.findOne();
    for (let i = 0; i < allLocations.length - 1; i++){
        db.Flight.create([
            {
              from: allLocations[i],
              to: allLocations[i+1],
              price: 300,
              date: new Date(),
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
airport()
