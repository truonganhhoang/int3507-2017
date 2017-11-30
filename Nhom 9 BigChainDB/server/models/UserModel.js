"use strict";

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

module.exports = mongoose.model('User', new Schema({
    publicKey: String,
    hashPwd: String,
    is_lec: Boolean,
    admin: Boolean,
    name: String,
    email: String
}));

