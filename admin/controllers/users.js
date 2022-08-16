const router = require('express').Router()
const bcrypt = require('bcrypt')
const jwt = require('json-web-token')
const db = require('../models')


/********************************************* POST OPERATIONS FOR USER INFO & CREDENTIALS ****************************************** */
// ACCOUNT CREATION
// 
router.post('/new', async (req, res) => {
    if (process.env.DEBUG==1) console.log("------------------------- \nPOST new user")
    if (process.env.DEBUG==1) console.log("PASSWORD = " + req.body.password)
    if (process.env.DEBUG==1) console.log("FIRST = " + req.body.first_name)
    if (process.env.DEBUG==1) console.log("LAST  = " + req.body.last_name)
    if (process.env.DEBUG==1) console.log("EMAIL = " + req.body.email_address)


    // Collect username and password, then encript it
    //
    req_username    = req.body.username
    passworddigest  = await bcrypt.hash(req.body.password, 10)

    // Check to make sure that username isn't already registered
    //
    await db.User.findOne({"username" : req_username})
    .then(user => {
        res.send(`Username ${user.username} already in use`)
    })
    // If we come to hear, that means it was not in the database
    //
    .catch(err => {
        console.log("Username avaiable -> " + req_username)

        if (process.env.DEBUG==1) console.log(`username=${req_username} Password digest=${passworddigest}`)
        
        // Insert into the User DB
        //

        db.User.create({username:           req_username, 
                        password_digest:    passworddigest,
                        first_name:         req.body.first_name,
                        last_name:          req.body.last_name,
                        email_address:      req.body.email_address})

        .then(user => {
            res.send(`User ${req_username} created`)
        })
        .catch(err => {
            console.log(err)
            res.send("Failed User Creation")
        })
    })
})

// ACCOUNT LOGIN
//
router.post('/login', async (req, res) => {

    let password_digest = "xxx"
    let req_password    = req.body.password
    var user_id         = null

    await db.User.findOne({"username" : req.body.username})
    .then(user => {
        console.log("USER IS:  " + user)
        if (user !== null) {
            password_digest = user.password_digest
            user_id         = user._id
            if (process.env.DEBUG==1) console.log("PWD=" + password_digest)
        }
        else {
            if (process.env.DEBUG==1) console.log("User not found - Find returned user null")
        }
    })
    .catch(err => {
        if (process.env.DEBUG==1) console.log(err)
    })

    if (user_id === null) {
        res.json("User Not Found")
        return
    }

    // Check if the passwords match
    //
    if (!await bcrypt.compare(req_password, password_digest)) {
        if (process.env.DEBUG==1) console.log("**** LOGIN FAILED - password mismatch")
        res.json("Password did not match")
    } else {
        console.log("USER ID IS " + user_id)

        const result = await jwt.encode(process.env.JWT_SECRET, { id: user_id })

        if (process.env.DEBUG==1) console.log("JWT Token=",result.value)

        res.json({ jwt_token: result.value })
        if (process.env.DEBUG==1) console.log("**** LOGIN SUCCESSFUL FOR " + req.body.username)
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

            if (process.env.DEBUG==1) console.log("ID IS " + id)

            await db.User.findOne({"_id" : id})
            .then(user => {
                if (process.env.DEBUG==1) console.log("USER IS:  " + user)
                res.json(user)
            })
            .catch(err => {
                if (process.env.DEBUG==1) console.log("FAILED USER LOOK UP " + err)
            })
        }
        else
            res.json("BAD AUTHEN METHOD")

    } catch {
        res.json(null)
    }
})

module.exports = router