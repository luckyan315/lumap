/**
 * sign in / up /out
 * @Copyright (c) 2014, guanglin.an (lucky315.an@gmail.com)
 */
"use strict";

var User = require('../db/user');
var common = require('./util/common');
var formalize = common.formalize;

function getLogin(req, res, next){
  //TODO: render login page
  res.render('login');
}

function login(req, res, next){
  //TODO: login
  res.send('login success!');
}

function getRegister(req, res, next){
  //TODO: render reg page
  res.render('reg');
}

function register(req, res, next){
  //TODO: register

  var name = formalize(req.body.name);
  var password = formalize(req.body.password);
  var re_pw = formalize(req.body.re_pw);
  var email = formalize(req.body.email);

  User.getUserByName(name, function(user){
    
  });
  
  res.send('register success!');
}

function logout(req, res, next){
  //TODO: logout
  res.end('logout success!');
}

module.exports.getLogin = getLogin;
module.exports.login = login;
module.exports.getRegister = getRegister;
module.exports.register = register;
module.exports.logout = logout;