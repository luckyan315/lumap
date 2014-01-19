/**
 * sign in / up /out
 * @Copyright (c) 2014, guanglin.an (lucky315.an@gmail.com)
 */
"use strict";

var User = require('../db/user');
var common = require('../util/common');
var formalize = common.formalize;
var encrypt_md5 = common.encrypt_md5;

exports.getLogin = function(req, res, next){
  //TODO: render login page
  res.render('login');
};

exports.login = function(req, res, next){
  //TODO: login
  var name = formalize(req.body.name);
  var password = formalize(req.body.password);
  
  User.getUserByName(name, function(err, user){
    if (err) {
      return res.send(500, 'get user from db occur error!');
    }

    if (encrypt_md5(password) !== user.password) {
      return res.send(500, 'username & password does not match!');
    }
    return res.send('login success!');
  });
};

exports.getRegister = function (req, res, next){
  //TODO: render reg page
  res.render('reg');
};

exports.register = function (req, res, next){
  //TODO: register

  var name = formalize(req.body.name);
  var password = formalize(req.body.password);
  var re_pw = formalize(req.body.re_pw);
  var email = formalize(req.body.email);

  if (password !== re_pw) {
    return res.send(500, 'user info error!');
  }
  
  User.getUserByName(name, function(err, user){
    if (err) {
      return res.send(500, 'get user from db occur error!');
    }

    if (user) {
      return res.send(500, 'user existed!');
    }

    User.save(name, encrypt_md5(password), email, function(err){
      if (err) {
        return res.send(500, 'save user to db occur error!');
      }

      return res.send('register success!');
    });
  });
  
};

exports.logout = function (req, res, next){
  //TODO: logout
  res.end('logout success!');
};
