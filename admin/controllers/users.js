const router = require('express').Router()
const bcrypt = require('bcrypt')
const jwt = require('json-web-token')

/********************************************* POST OPERATIONS FOR USER INFO & CREDENTIALS ****************************************** */
// ACCOUNT CREATION
// 
router.post('/new', async (req, res) => {
    if (process.env.DEBUG==1) console.log("------------------------- \nPOST new user")
    if (process.env.DEBUG==1) console.log("PASSWORD = " + req.body.password)

    // TBD Create new username into DB with a password encripted, store to DB **** db.create()
    //
    password_digest = await bcrypt.hash(req.body.password, 10)
    if (process.env.DEBUG==1) console.log(`username=${req.body.username} Password digest=${password_digest}`)

    res.send(password_digest)
})

// ACCOUNT LOGIN
//
router.post('/login', async (req, res) => {

    password        = req.body.password
    password_digest = req.body.password_digest  // Stubbed until in DB, then pull it out here
    user_id         = 5                         // Stubbed until in DB

    if (process.env.DEBUG==1) console.log("------------------------- \nPOST login")
    if (process.env.DEBUG==1) console.log("PASSWORD =",password, "\npassword_digest=", password_digest)

    // TBD check if user exists in DB also
    //
    if (!await bcrypt.compare(password, password_digest)) {
        res.status(404).json({ message: `Could not find a user with the provided username and password` })
        if (process.env.DEBUG==1) console.log("**** LOGIN FAILED")
    } else {
        const result = await jwt.encode(process.env.JWT_SECRET, { id: user_id })
        if (process.env.DEBUG==1) console.log("JWT Token=",result.value)
        res.json({ jwt_token: result.value })
    }
})

/********************************************* GET OPERATIONS FOR USER INFO & CREDENTIALS ****************************************** */
//
router.get('/profile', async (req, res) => {
    try {
        // Split the authorization header into [ "Bearer", "TOKEN" ]:
        const [authentication_method, token] = req.headers.authorization.split(' ')

        if (process.env.DEBUG==1) console.log("------------------------- \nPOST login")
        if (process.env.DEBUG==1) console.log("ATHEN=", authentication_method)
        if (process.env.DEBUG==1) console.log("TOKEN=", token)

        // Only handle "Bearer" authorization for now 
        //  (we could add other authorization strategies later):
        if (authentication_method == 'Bearer') {

            // Decode the JWT
            const result = await jwt.decode(process.env.JWT_SECRET, token)

            // Get the logged in user's id from the payload
            const { id } = result.value

            // *** TBD fetch user data from DB
            
            res.json({user:"here is the profile"})
        }
        else
            res.send("BAD AUTHEN METHOD")

    } catch {
        res.json(null)
    }
})



module.exports = router