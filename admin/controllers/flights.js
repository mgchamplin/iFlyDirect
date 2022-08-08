const router = require('express').Router()

/********************************************* GET OPERATIONS FOR FLIGHTS ****************************************** */
/* GET ...
*/
router.get('/flights', (req, res) => {
    console.log("GET FLIGHTS")
    console.log(req.body.body1)         // For testing
    console.log(req.params.param1)      // For testing
    //console.log(req)
    res.send("FLIGHTS")
})

module.exports = router