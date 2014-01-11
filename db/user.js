var User = require('../model').User;

function getUserByName(name , cb){
  User.findOne({name: name}, cb);
};

function save(name, password, email, cb){
  var user = new User();
  user.name = name;
  user.password = password;
  user.email = email;

  user.save(cb);
};

exports.save = save;
exports.getUserByName = getUserByName;