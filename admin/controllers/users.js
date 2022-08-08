const router = require('express').Router()

/********************************************* GET OPERATIONS FOR USER CREDENTIALS ****************************************** */
/* GET ...
*/
router.get('/users', (req, res) => {
    console.log("GET USERS")
    res.send("USERS")
})

module.exports = router