const router = require('express').Router()

/********************************************* GET OPERATIONS FOR FLIGHTS ****************************************** */
/* GET ...
*/
router.get('/', (req, res) => {
    if (process.env.DEBUG==1) console.log("GET FLIGHTS")

    if (process.env.DEBUG==1) console.log(req.query.param1)
    if (process.env.DEBUG==1) console.log(req.headers.headerspot)
    if (process.env.DEBUG==1) console.log(req.body.password)         // For testing

    res.send("FLIGHTS") 
})

module.exports = router