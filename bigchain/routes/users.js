var express = require('express');
var router = express.Router();
var User = require('../models/User');
var jwt = require('jsonwebtoken');
var config = require('../config/config');
var driver = require('bigchaindb-driver');
const conn = new driver.Connection(config.DB_API);
var controller = require('../controllers/User');

router.use(controller.filter);

/* GET users listing. */
router.get('/', function (req, res, next) {
    res.send('respond with a resource');
});

router.post('/authenticate', controller.authenticate);

router.get('/users', controller.listUser);

router.post('/user', controller.createUser);

router.post('/create', controller.createTransaction);

module.exports = router;
