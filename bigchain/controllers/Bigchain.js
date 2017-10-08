'use strict';

var config = require('../config/config');
var driver = require('bigchaindb-driver');
const key =  new driver.Ed25519Keypair();
const conn = new driver.Connection(config.DB_API);

exports.pushData = function (json,next) {
    console.log("PrivateKey: ",key.privateKey,"    PublicKey: ",key.publicKey);
    const tx = driver.Transaction.makeCreateTransaction(
        json,
        { what: 'TEST 1234567890' },
        [ driver.Transaction.makeOutput(
            driver.Transaction.makeEd25519Condition(key.publicKey))
        ],
        key.publicKey
    );
    const txSigned = driver.Transaction.signTransaction(tx, key.privateKey);
    conn.postTransaction(txSigned)
        .then(() => conn.pollStatusAndFetchTransaction(txSigned.id))
        .then(retrievedTx => next(retrievedTx))
};

exports.searchAssets = function(text,next) {
    conn.searchAssets(text)
        .then(json => next(json));
};

exports.listBlock = function(transactionId,status,next) {
    conn.listBlocks(transactionId,status)
        .then(json => next(json))
};

exports.listTransaction = function (assetId,operation,next) {
    conn.listTransactions(assetId,operation)
        .then(json => next(json))
};

exports.listOutputs = function (publickey,spent,next) {
    conn.listOutputs(publickey,spent)
        .then(json => next(json))
};

exports.listScore = function (name ,next) {
    conn.searchAssets(name)
        .then(json => {
            let output = [];
            for (var i=0 ; i< json.length; i++) {
                var data = json[i];
                console.log(i,data.data);
                output.push(data.data);
            }
            next(output)
        })
};