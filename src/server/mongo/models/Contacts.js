var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var contactsSchema = new Schema({
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  dob : {
    type: Date,
    default : new Date()
  }
});

module.exports = mongoose.model('Contacts', contactsSchema);
