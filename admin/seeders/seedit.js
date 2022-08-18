
function randomDate(start, end) {
    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
}

module.exports = {

    test: async function () {
        console.log("SEED IT ALL")

        async function createDbFlightEntry (depart_date, arrival_date, from_city, from_city_id,
            to_city, to_city_id, airline, fly_price_adult, fly_price_child) {
                await db.Flight.create({
                        departure_date: depart_date,
                        arrival___date: arrival_date,

                        from_city:      from_city,
                        from_id:        from_city_id,

                        to_city:        to_city,
                        to_id:          to_city_id,

                        airline:        airline,

                        adult_price:    fly_price_adult,
                        child_price:    fly_price_child,

                        roundTrip:      true
                }) 
            }

        const db = require("../models");

        let airlines = ["Spirit", "United", "Southwest", "American", "Delta"]
/*
        // create a new place with create(). Pass in an array to create multiple places at once.
        await db.Location.create([
            {state:"Alabama", state_abbv:"AL", city:"Montgomery", region:"South", airport:"MAL"},
            {state:"Alaska", state_abbv:"AK", city:"Juneau", region:"West", airport: "AJI"},
            {state:"Arizona", state_abbv:"AZ", city:"Phoenix", region:"West", airport: "API"},
            {state:"Arkansas", state_abbv:"AR", city:"Little Rock", region:"South", airport: "ALI"},
            {state:"California", state_abbv:"CA", city:"Sacramento", region:"West", airport: "CSI"},
            {state:"California", state_abbv:"CA", city:"Los Angeles", region:"West", airport: "LAX"},
            {state:"California", state_abbv:"CA", city:"San Francisco", region:"West", airport: "SFO"},
            {state:"California", state_abbv:"CA", city:"San Jose", region:"West", airport: "SJC"},
            {state:"California", state_abbv:"CA", city:"Oakland", region:"West", airport: "OAK"},
            {state:"Colorado", state_abbv:"CO", city:"Denver", region:"West", airport: "CDI"},
            {state:"Connecticut", state_abbv:"CT", city:"Hartford", region:"Northeast", airport: "CHI"},
            {state:"Delaware", state_abbv:"DE", city:"Dover", region:"Northeast", airport: "DDI"},
            {state:"Florida", state_abbv:"FL", city:"Tallahassee", region:"South", airport: "FTI"},
            {state:"Georgia", state_abbv:"GA", city:"Atlanta", region:"South", airport: "GAI"},
            {state:"Hawaii", state_abbv:"HI", city:"Honolulu", region:"West", airport: "HHI"},
            {state:"Idaho", state_abbv:"ID", city:"Boise", region:"West", airport: "IBI"},
            {state:"Illinois", state_abbv:"IL", city:"Springfield", region:"Midwest", airport: "ISI"},
            {state:"Indiana", state_abbv:"IN", city:"Indianapolis", region:"Midwest", airport: "III"},
            {state:"Iowa", state_abbv:"IA", city:"Des Moines", region:"Midwest", airport: "IDI"},
            {state:"Kansas", state_abbv:"KS", city:"Topeka", region:"Midwest", airport: "TKTI"},
            {state:"Kentucky", state_abbv:"KY", city:"Frankfort", region:"South", airport: "KFI"},
            {state:"Louisiana", state_abbv:"LA", city:"Baton Rouge", region:"South", airport: "LBI"},
            {state:"Maine", state_abbv:"ME", city:"Augusta", region:"Northeast", airport: "MAI"},
            {state:"Maryland", state_abbv:"MD", city:"Annapolis", region:"Northeast", airport: "MAA"},
            {state:"Massachusetts", state_abbv:"MA", city:"Boston", region:"Northeast", airport: "MBI"},
            {state:"Michigan", state_abbv:"MI", city:"Lansing", region:"Midwest", airport: "MLI"},
            {state:"Minnesota", state_abbv:"MN", city:"St. Paul", region:"Midwest", airport: "MSI"},
            {state:"Mississippi", state_abbv:"MS", city:"Jackson", region:"South", airport: "MJI"},
            {state:"Missouri", state_abbv:"MO", city:"Jefferson City", region:"Midwest", airport: "MJJ"},
            {state:"Montana", state_abbv:"MT", city:"Helena", region:"West", airport: "MHI"},
            {state:"Nebraska", state_abbv:"NE", city:"Lincoln", region:"Midwest", airport: "NLI"},
            {state:"Nevada", state_abbv:"NV", city:"Carson City", region:"West", airport: "NCI"},
            {state:"New Hampshire", state_abbv:"NH", city:"Concord", region:"Northeast", airport: "NCC"},
            {state:"New Jersey", state_abbv:"NJ", city:"Trenton", region:"Northeast", airport: "NTI"},
            {state:"New Mexico", state_abbv:"NM", city:"Santa Fe", region:"West", airport: "NSI"},
            {state:"New York", state_abbv:"NY", city:"Albany", region:"Northeast", airport: "NAI"},
            {state:"North Carolina", state_abbv:"NC", city:"Raleigh", region:"South", airport: "NRI"},
            {state:"North Dakota", state_abbv:"ND", city:"Bismarck", region:"Midwest", airport: "NBI"},
            {state:"Ohio", state_abbv:"OH", city:"Columbus", region:"Midwest", airport: "OCI"},
            {state:"Oklahoma", state_abbv:"OK", city:"Oklahoma City", region:"South", airport: "OOI"},
            {state:"Oregon", state_abbv:"OR", city:"Salem", region:"West", airport: "OSI"},
            {state:"Pennsylvania", state_abbv:"PA", city:"Harrisburg", region:"Northeast", airport: "PHI"},
            {state:"Rhode Island", state_abbv:"RI", city:"Providence", region:"Northeast", airport: "RPI"},
            {state:"South Carolina", state_abbv:"SC", city:"Columbia", region:"South", airport: "SCI"},
            {state:"South Dakota", state_abbv:"SD", city:"Pierre", region:"Midwest", airport: "SPI"},
            {state:"Tennessee", state_abbv:"TN", city:"Nashville", region:"South", airport: "TNI"},
            {state:"Texas", state_abbv:"TX", city:"Austin", region:"South", airport: "TAI"},
            {state:"Utah", state_abbv:"UT", city:"Salt Lake City", region:"West", airport: "USI"},
            {state:"Vermont", state_abbv:"VT", city:"Montpelier", region:"Northeast", airport: "VMI"},
            {state:"Virginia", state_abbv:"VA", city:"Richmond", region:"South", airport: "VRI"},
            {state:"Washington", state_abbv:"WA", city:"Olympia", region:"West", airport: "WOI"},
            {state:"West Virginia", state_abbv:"WV", city:"Charleston", region:"South", airport: "WCI"},
            {state:"Wisconsin", state_abbv:"WI", city:"Madison", region:"Midwest", airport: "WMI"},
            {state:"Wyoming", state_abbv:"WY", city:"Cheyenne", region:"West", airport: "WCC"}
            ])

*/

        // Check to make sure that username isn't already registered
        //
        await db.Location.find()
        .then(airports => {
            console.log("AIRPORT ", airports)
            console.log(airports.length)
            let counter = 0;

            num_airports        = 50 //airports.length;
            num_flight_options  = 5

            for (let a = 0; a < num_airports; a++) {
                for (let b = 0; b < num_airports; b++) {
                    if (airports[a]._id != airports[b]._id) {
                        for (let flight=0; flight < num_flight_options; flight++) {
                            let fly_price = Math.round(((Math.random()+0.01) * 100),2) *10
                            if (fly_price < 200)
                                fly_price = 200 + 2 * b
                            let index = Math.floor(10* Math.random() % airlines.length)
                            let airline = airlines[index]

                            let depart_date = new randomDate(new Date(2022, 9, 12), new Date())

                            let date_increase = (Math.random()/7) * 150000000
                            depart_date.setTime(depart_date.getTime() + date_increase)

                            let arrival_date = new Date (depart_date)
                            date_increase = (Math.random()/7) * 150000000
                            arrival_date.setTime(arrival_date.getTime() + date_increase)

                            counter++;

                            console.log(    counter, " ", a, " ",b,             " Departs " +
                                            depart_date, " ",   
                                            airports[a].city + "->" + 
                                            airports[b].city + " " +
                                            airline + " $" + 
                                            fly_price + "  Arrives " +
                                            arrival_date)

                            createDbFlightEntry(depart_date,
                                                arrival_date,
                                                airports[a].city,
                                                airports[a]._id,
                                                airports[b].city,
                                                airports[b]._id,
                                                airline,
                                                fly_price,
                                                Math.round(fly_price * 0.75))
    /*
                            db.Flight.create({
                                departure_date: depart_date,
                                arrival___date: arrival_date,

                                from_city:      airports[a].city,
                                from_id:        airports[a]._id,

                                to_city:        airports[b].city,
                                to_id:          airports[b]._id,

                                airline:        airline,

                                adult_price:    fly_price,
                                child_price:    fly_price - 10,

                                roundTrip:      true
                            }) 
    */
                        }
                    }
                }
            }
        })
    }
}