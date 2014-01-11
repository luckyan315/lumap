/**
 * provide common util funcs
 * Copyright (c) 2013, guanglin.an (lucky315.an@gmail.com)
 */

"use strict";


/**
 * Global dependance modules
 */

var crypto = require('crypto');


/**
 * filter & check msg from client
 * @param {string} str form input msg from client
 * @return {string} formalized string
 */

function formalize(str) {
  //stringify...
  if (typeof str === 'object' && str !== null && str.toString) {
    str = str.toString();
  }

  str = str === null ? '' : str + '';

  //remove extra blanks
  str = str.trim();

  return str.split(' ')[0];
};

/**
 * encrypt string by md5
 *
 * @param {string} str a string to be encrypted by md5
 * @return {String}
 */
function encrypt_md5(str) {
  return crypto.createHash('md5').update(str).digest('hex');
}


/**
 * encrypt string by sha1
 *
 * @param {string} str a string to be encrypted by sha1
 * @return {String}
 */
function encrypt_sha1(str) {
  return crypto.createHash('sha1').update(str).digest('hex');
}


module.exports.encrypt_md5 = encrypt_md5;
module.exports.encrypt_sha1 = encrypt_sha1;
module.exports.formalize = formalize;