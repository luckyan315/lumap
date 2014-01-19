var User = require('../model').User;

exports.getUserByName = function (name , cb){
  User.findOne({name: name}, cb);
};

exports.save = function (name, password, email, cb){
  var user = new User();
  user.name = name;
  user.password = password;
  user.email = email;

  user.save(cb);
};
