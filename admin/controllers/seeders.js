const router = require('express').Router()

seedit = require("../seeders/seedit")

router.get('/', async (req, res) => {
    console.log("SEEDER")  
    res.send("Seeder")

    seedit.test()
})

module.exports = router