// require models folder to give CRUD access to database in models
const db = require("../models");

// create a new flight with create().
async function airport(){
    let place = await db.Location.findOne();
    db.Flight.create([
    {
        from: place,
        to: place,
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
airport()
