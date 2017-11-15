var express = require('express');
var router = express.Router();
var User = require('../models/UserModel');
var jwt = require('jsonwebtoken');
var config = require('../config/config');
var driver = require('bigchaindb-driver');
const conn = new driver.Connection(config.DB_API);
var controller = require('../controllers/UserController');

router.use(controller.filter);

/* GET users listing. */
router.get('/', function (req, res, next) {
    res.send('respond with a resource');
});

router.post('/authenticate', controller.authenticate);

router.get('/users', controller.listUser);

router.post('/create_user', controller.createUser);

router.get('/create', controller.createPoint);

router.post('/transfer', controller.tranferPoint);

router.get('/current', controller.currentPoint);

module.exports = router;
