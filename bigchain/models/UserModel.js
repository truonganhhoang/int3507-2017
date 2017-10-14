"use strict";

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

module.exports = mongoose.model('User', new Schema({
    publicKey: String,
    privateKey: String,
    admin: Boolean
}));

