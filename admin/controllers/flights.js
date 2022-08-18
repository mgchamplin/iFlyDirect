const router = require('express').Router()
const db = require('../models')

/********************************************* GET OPERATIONS FOR FLIGHTS ****************************************** */
/* GET ...
*/
router.get('/', (req, res) => {
    if (process.env.DEBUG==1) console.log("GET FLIGHTS")
    console.log(req.query)
    db.Flight.find({from_city:req.query.from_city, to_city:req.query.to_city})
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

})

module.exports = router