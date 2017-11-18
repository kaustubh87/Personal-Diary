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
  },
  user: {
    type: Schema.Types.ObjectId
  }
});

module.exports = mongoose.model('Contacts', contactsSchema);
