'use strict';

var config = require('../config/config');
var bigchaindriver = require('bigchaindb-driver');
var conn = bigchaindriver.Connection(config.DB_API);


exports.save = function(json, next) {

};