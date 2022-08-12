const router = require('express').Router()

/********************************************* GET OPERATIONS FOR FLIGHTS ****************************************** */
/* GET ...
*/
router.get('/', (req, res) => {
    if (process.env.DEBUG==1) console.log("GET FLIGHTS")

    res.send("FLIGHTS") 
})

module.exports = router