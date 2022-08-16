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
    // If we come to hear, that means it was not in the database
    //
    .catch(err => {
        console.log(err)

        res.send("Failed Userr Creation")
    })
})

module.exports = router