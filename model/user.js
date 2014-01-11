var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
  name: {type: String, index: true},
  password: {type: String},
  email: {type: String, unique: true}
});

mongoose.model('User', UserSchema);