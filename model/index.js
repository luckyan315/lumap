"user strict";

var mongoose = require('mongoose');

var config = require('../config');
var db_url = config.db_url;

mongoose.connect(db_url, function (err) {
  if (err) {
    console.error('connect to %s error: ', config.db_url, err.message);
    process.exit(1);
  }
});

require('./user');
module.exports.User = mongoose.model('User');