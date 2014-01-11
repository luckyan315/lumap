/**
 * route module 
 * @Copyright 2014, guanglin.an (luckyan315.an@gmail.com)
 */

"use strict";

/**
 * module dependences
 */
var sign = require('./sign');

/**
 * module imported
 */
var app = module.parent.exports.app;

app.get('/login', sign.getLogin);
app.post('/login', sign.login);
app.get('/reg', sign.getRegister);
app.post('/reg', sign.register);
app.get('/logout', sign.logout);

