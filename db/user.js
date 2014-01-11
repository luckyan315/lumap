var User = require('../model/user');

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

module.exports.save = save;
module.exports.getUserByName = getUserByName;