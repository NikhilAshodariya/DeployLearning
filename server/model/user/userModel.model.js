var mongoose = require("mongoose");

var userSchema = new mongoose.Schema({
  userName: {
    type: String,
    required: true
    // unique: true
  },

  email: {
    type: String,
    required: true,
    unique: true
  },

  password: {
    type: String,
    required: true
  },

  dob: {
    type: Date,
    default: Date.now()
  },

  userCreated: {
    type: Date,
    default: Date.now()
  }
});

module.exports = mongoose.model('User', userSchema);
