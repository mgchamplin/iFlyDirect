
function randomDate(start, end) {
    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
}

module.exports = {
    test: async function () {
        console.log("TEST IT2")

        const db = require("../models");

        let airlines = ["Spirit", "United", "Southwest", "American", "Delta"]

        // create a new place with create(). Pass in an array to create multiple places at once.
        await db.Location.create([
            {
                city: "Long Beach",
                airport: "LBX",
            },
            {
                city: "Los Angeles",
                airport: "LAX",
            },
            {
                city: "Honolulu",
                airport: "HLL",
            },
            {
                city: "Las Vegas",
                airport: "LVX",
            },
            {
                city: "New York",
                airport: "JFK",
            },
            {
                city:"San Francisco",
                airport: "SFO"
            },
            {
                city:"San Jose",
                airport: "SJC"
            },
            {
                city:"Atlanta",
                airport: "ATL"
            },
            {
                city:"Dallas",
                airport: "DAL"
            },
            {
                city:"Chicago",
                airport: "CHC"
            },
            {
                city:"Miami",
                airport: "MIA"
            },
            {
                city:"Seattle",
                airport: "SEA"
            },
            {
                city:"Montgomery",
                airport: "MON"
            },
            {
                city:"Denver",
                airport: "DEN"
            },
            {
                city:"San Diego",
                airport: "SDG"
            },
            {
                city:"Washington DC",
                airport: "WDC"
            }])

        // Check to make sure that username isn't already registered
        //
        await db.Location.find()
        .then(airports => {
            console.log(airports)
            console.log(airports.length)

            for (let a = 0; a < airports.length; a++) {
                for (let b = 0; b < airports.length; b++) {
                    if (airports[a].airport != airports[b].airport) {
                        for (let flight=0; flight < 7; flight++) {
                            let fly_price = Math.round((Math.random() * 100),2) *10
                            let fly_roundtrip = true;
                            let index = Math.floor(10* Math.random() % airports.length)
                            let airline = airlines[index]

                            let depart_date = randomDate(new Date(2022, 9, 12), new Date())

                            let date_increase = (Math.random()/7) * 150000000
                            depart_date.setTime(depart_date.getTime() + date_increase)
                            console.log(depart_date, " ", airports[a]._id + "->" + airports[b]._id + " " + fly_price)
    
                            db.Flight.create({
                                date: depart_date,
                                from: airports[a]._id,
                                to: airports[b]._id,
                                price:fly_price,
                                roundTrip:fly_roundtrip
                            })
                        }
                    }
                }
            }
        })
    }
}