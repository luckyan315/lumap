/**
 * lumap http server
 * @Copyright 2014, guanglin.an (lucky315.an@gmail.com)
 */

"use strict";

/**
 * Global Module dependencies.
 */
var express = require('express');
var http = require('http');
var path = require('path');

/**
 * local dependencies.
 */
var logger = require('./util/logger');
var config = require('./config');
var isDebugMode = config.debug;

var app = express();
var server = http.createServer(app);

//all environments
app.set('port', process.env.PORT || config.port || 3000);
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.query());
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(express.cookieParser('BrowserIde'));
app.use(express.session());

app.use(app.router);
app.use(express.static(path.join(__dirname, 'client')));

if (isDebugMode) {
  app.use(express.errorHandler);
}

exports.app = app;

/**
 * routes
 */
require('./route');

server.listen(app.get('port'), function(){
  logger.info('lumap http server is listening on port ' + app.get('port'));
});

/**
 * Handle exceptions
 */

process.on('UncaughtException', function(err){
  console.log('Exception: ' + err.stack);
});


