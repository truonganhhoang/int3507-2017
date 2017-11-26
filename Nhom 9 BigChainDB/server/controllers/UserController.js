var User = require('../models/UserModel');
var jwt = require('jsonwebtoken');
var config = require('../config/config');
var driver = require('bigchaindb-driver');
var cryto = require('crypto-js');
var bcrypt = require('bcrypt');
var bigchainAPI = require('./BigchainController');
var async = require('async');
const coinSecret =  "Hello";
const coinName = "SunadoPoint";
const saltRounds = 10;
const saltCoin = 10;

const conn = new driver.Connection(config.DB_API);

exports.filter = function (req, res, next) {
    if (req.url == '/authenticate' || req.url == '/create_user') {
        next();
    } else {
        // check header or url parameters or post parameters for token
        var token = req.body.token || req.query.token || req.headers['x-access-token'];
        // decode token
        if (token) {
            // verifies secret and checks exp
            jwt.verify(token, req.app.get('superSecret'), function (err, decoded) {
                if (err) {
                    return res.json({success: false, message: 'Failed to authenticate token.'});
                } else {
                    // if everything is good, save to request for use in other routes
                    console.log("Token valid");
                    req.decoded = decoded;
                    next();
                }
            });
        } else {
            // if there is no token
            // return an error
            return res.status(403).send({
                success: false,
                message: 'No token provided.'
            });

        }
    }
};

exports.authenticate = function (req, res, next) {
    console.log(req.body);
    User.findOne({
        publicKey: req.body.public_key
    }, function (err, user) {
        if (err) {
            throw err;
        }

        if (!user) {
            res.json({success: false, message: 'Authentication failed. User not found.'});
            console.log("User not found")
        } else {
            const compare = bcrypt.compareSync(req.body.private_key, user.hashPwd);
            if (compare != true) {
                res.json({success: false, message: 'Authentication failed. Wrong password.'});
            } else {
                const payload = {
                    admin: user.admin,
                    privateKey: req.body.private_key,
                    publicKey: user.publicKey,
                    is_lec: user.is_lec
                };
                var token = jwt.sign(payload, req.app.get('superSecret'), {
                    expiresIn: 60 * 60 * 24 // expires in 24 hours
                });
                res.json({
                    success: true,
                    message: 'Enjoy your token!',
                    token: token,
                    name: user.name,
                    email: user.email
                });
            }
        }
    })
};

exports.listUser = function (req, res, next) {
    User.find({}, function (err, users) {
        if(err) throw err;
        res.json(users);
    });
};

exports.createUser = function (req, res, next) {
    var key =  new driver.Ed25519Keypair();
    var hash = bcrypt.hashSync(key.privateKey, saltRounds);
    var is_lec = req.body.is_lec == 'true' || false;
    var is_admin = req.body.is_admin == 'true' || false;
    var name = req.body.name;
    var email = req.body.email;
    var user = new User({
        publicKey: key.publicKey,
        hashPwd: hash,
        admin: is_admin,
        is_lec: is_lec,
        email:  email,
        name: name
    });
    user.save(function (err) {
        if (err) throw err;

        console.log('User saved successfully');
        res.json({
            success: true,
            publicKey: key.publicKey,
            privateKey: key.privateKey,
            is_lec: is_lec,
            admin: is_admin,
            email: email,
            name: name
        });
    });
};

function createOnePoint(req, res, next) {
    const userData = req.decoded;
    console.log(userData);
    const date = new Date();
    const base = coinSecret + date.toDateString();
    console.log("base String: ",base);
    const encode = bcrypt.hashSync(base,saltCoin);
    const json = {
        name: coinName,
        coinToken: encode
    };
    console.log(json);

    const tx = driver.Transaction.makeCreateTransaction(
        json,
        { time: date },
        [ driver.Transaction.makeOutput(
            driver.Transaction.makeEd25519Condition(userData.publicKey))
        ],
        userData.publicKey
    );
    const txSigned = driver.Transaction.signTransaction(tx, userData.privateKey);
    console.log("created Transaction",txSigned);
    conn.postTransaction(txSigned)
        .then(() => conn.pollStatusAndFetchTransaction(txSigned.id))
        .then(retrievedTx => {
            "use strict";
            next(null,{
                success: true,
                transactionID: retrievedTx
            });
        }).catch(function (reason) {
            console.log(reason);
            next(reason);
        });
    console.log("sent Transaction");
};

exports.createPoint = function (req,res) {
    const userData = req.decoded;
    const numOfPoint = req.query.number;
    console.log("number of point: ",numOfPoint);
    var tasks = {};
    for (i = 0;i < numOfPoint; i++) {
        tasks[i] = function(i) { return function (callback) {
            createOnePoint(req,res,callback);
        }}(i);
    }
    async.parallel(tasks, function(err,result) {
        if (err) {
            res.json({
                success: false
            })
        }
       res.json({
           success: true
       })
    });
}

exports.currentPoint = function (req,res) {
    const userData = req.decoded;
    //console.log(userData.publicKey);
    bigchainAPI.searchAssets(coinName, function (json) {
        //console.log(json);
        var tasks = {};
        console.log("make tasks");
        for (index in json){
           const id = json[index].id;
           console.log(id);
           tasks[index] = function (callback) {
               checkOwner(id,userData.publicKey,callback)
           };
        }

        async.parallel(tasks, function(err,result) {
            var count = 0;
            var point_list = {};
            //console.log(result);
            for (index in json) {
                if (result[index] == true) {
                    point_list[count] = json[index].id;
                    count++;
                }
            }
            //console.log(count);
            res.send({
                point: count,
                point_list: point_list
            });

        });
    })
};

function checkOwner(assetId,public_key, next) {
    bigchainAPI.listTransaction(assetId, function (json) {
        if(json.length != 0) {
            const lastTransaction = json[json.length-1];
            const ownerId = lastTransaction.outputs[0].public_keys[0] || '';
            const compare = public_key == ownerId;
            //console.log(assetId," result ",compare);
            next(null,compare);
        }
    })
}

function getPointList(publicKey,next) {
    bigchainAPI.searchAssets(coinName, function (json) {
        //console.log(json);
        var tasks = {};
        for (index in json){
            const id = json[index].id;
            tasks[index] = function(index){ return function (callback) {
                checkOwner(id,publicKey,callback)
            }}(index);
        }

        async.parallel(tasks, function(err,result) {
            if (err) next(err);
            var count = 0;
            var point_list = {};
            //console.log(result);
            for (index in json) {
                if (result[index] == true) {
                    point_list[count] = json[index].id;
                    count++;
                }
            }
            //console.log(count);
            next(null,count,point_list);
        });
    })
}

exports.tranferPoint = function (req, res) {
    const userData = req.decoded;
    const receiver = req.body.receiver;
    const numOfPoint = req.body.number;
    console.log("start ",numOfPoint);
    getPointList(userData.publicKey, function (err,count,list) {
        if (err) throw err;
        console.log("get pointlist success ",count," ",list);
       if (count < numOfPoint ) {
           res.send({
               success: false,
               reason: "Not enough point"
           })
       } else {
           console.log("transfer point");
           var tasks = {};
           for (i = 0; i < numOfPoint; i++){
               tasks[i] = function(i){ return function (callback) {
                   tranferOnePoint(userData,receiver,list[i],callback) ;
               }}(i);
           }
           async.parallel(tasks, function (err,result) {
               if (err) {
                    res.json({
                        success: false
                    })
                }
               res.json({
                   success: true
               })
           })
           console.log("final line");
       }
    });
};

 function tranferOnePoint(userData,receiver,assetId,next) {
    const date = new Date();
    console.log(userData.publicKey," ",userData.privateKey);
    bigchainAPI.listTransaction(assetId, function (json) {
         console.log(json);
        // next(json);
        if(json.length != 0) {
            const lastTransaction = json[json.length-1];
            console.log(lastTransaction);
            const transferTx = driver.Transaction.makeTransferTransaction(
                lastTransaction,
                {data: date},
                [ driver.Transaction.makeOutput(
                    driver.Transaction.makeEd25519Condition(receiver))
                ],
                0
            );

            const txSigned = driver.Transaction.signTransaction(transferTx, userData.privateKey);
            console.log(txSigned);
            conn.postTransaction(txSigned)
                .then(() => conn.pollStatusAndFetchTransaction(txSigned.id))
                .then(retrievedTx => {
                    "use strict";
                    next(null,{
                        success: true,
                        transactionID: retrievedTx
                    })
                }).catch(function (reason) {
                    console.log(reason);
                    next(reason);
            });
        }
    })
}
