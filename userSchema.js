var mongoose = require('mongoose');

var Cart = require('./cartSchema');

var userSchema = new mongoose.Schema({
      email: { type: String, lowercase: true },
      username: { type: String, lowercase: true, required: true },
      cart: [ Cart ],
      location: String,
      member: { type: Boolean, default: false }
});

module.exports = mongoose.model("User", userSchema);
