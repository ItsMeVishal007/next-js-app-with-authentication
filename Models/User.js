const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  FirstName: {
    type: String
  },
  LastName: {
    type: String
  },
  Email: {
    type: String
  },
  Password: {
    type: String
  }
})

module.exports = mongoose.models.User || mongoose.model('User', UserSchema);