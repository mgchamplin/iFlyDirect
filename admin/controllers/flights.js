const router = require('express').Router()
const db = require('../models')

/********************************************* GET OPERATIONS FOR FLIGHTS ****************************************** */
/* GET ...
*/
router.get('/', (req, res) => {
    if (process.env.DEBUG==1) console.log("GET FLIGHTS")

    db.Flight.find()
    .then(flights => {
        console.log("FOUND SOMETHING")
        console.log(flights)

        res.json(flights) 
    })
    // If we come to here, that means it was not in the database
    //
    .catch(err => {
        console.log(err)

        res.send("Failed User Creation")
    })


    //fetch all data
    router.get('/countByCity', async (res, res, next) =>{
        const cities = req.query.to_city.split(",")
        try {
            const countByCity = await Promise.all(cities.map(city=>{
                return Flights.countDocuments({city:city})
            }))
            res.status(200).json(list);            
        } catch (error) {
            next(error);
        }
    })

    // fetch data one by one 
    router.get('/countByType', (res, res, next) =>{        
        try {
            const northEastCount = await Flight.countDocuments({ type: "Northeast" });
            const southCount = await Flight.countDocuments({ type: "South" });
            const westCount = await Flight.countDocuments({ type: "West" });
            const midwestCount = await Flight.countDocuments({ type: "Midwest" });            

            res.status(200).json([
                { type: "Northeast", count: northEastCount },
                { type: "South", count: southCount },
                { type: "West", count: westCount },
                { type: "Midwest", count: midwestCount },
              ]);     
        } catch (error) {
            next(error);
        }
    })

    router.get('/countByAirline', (res, res, next) =>{        
        try {
            const spiritCount = await Flight.countDocuments({ airline: "Spirit Airlines" });
            const jetBlueCount = await Flight.countDocuments({ airline: "JetBlue" });
            const deltaCount = await Flight.countDocuments({ airline: "Delta Airlines" });
            const southwestCount = await Flight.countDocuments({ airline: "Southwest Airlines" });
            const americanCount = await Flight.countDocuments({ airline: "American Airlines" });

            res.status(200).json([
                { airline: "Spirit Airlines", count: spiritCount },
                { airline: "JetBlue", count: jetBlueCount },
                { airline: "Delta Airlines", count: deltaCount },
                { airline: "Southwest Airlines", count: southwestCount },
                { airline: "American Airlines", count: americanCount },
              ]);     
        } catch (error) {
            next(error);
        }
    })
})

module.exports = router