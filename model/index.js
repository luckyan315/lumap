"user strict";

var mongoose = require('mongoose');

var config = require('../config');
var db = config.db;

mongoose.connect(db, function (err) {
  if (err) {
    console.error('connect to %s error: ', db, err.message);
    process.exit(1);
  }
});

require('./user');
module.exports.User = mongoose.model('User');