const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
  username:         { type: String, required: true },
  password_digest:  { type: String, required: true},
  first_name:       { type: String, required: true},
  last_name:        { type: String, required: true},
  email_address:    { type: String, required: true}
})

module.exports = mongoose.model('User', userSchema)