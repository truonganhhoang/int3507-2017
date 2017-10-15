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

exports.listTransaction = function (assetId,next) {
    conn.listTransactions(assetId)
        .then(json => next(json))
};

exports.listOutputs = function (publickey,spent,next) {
    conn.listOutputs(publickey,spent)
        .then(json => next(json))
};

exports.getTransaction = function (transaction_id,next) {
    conn.getTransaction(transaction_id)
        .then(json => next(json))
};

exports.getSortedTransactions = function(assetId,next) {
    conn.listTransactions(assetId)
        .then((txList) => {
            if (txList.length <= 1) {
                next(txList)
            }
            const inputTransactions = [];
            txList.forEach((tx) =>
                tx.inputs.forEach(input => {
                    if (input.fulfills) {
                        inputTransactions.push(input.fulfills.transaction_id)
                    }
                })
            );
            const unspents = txList.filter((tx) => inputTransactions.indexOf(tx.id) === -1);
            if (unspents.length) {
                let tipTransaction = unspents[0];
                let tipTransactionId = tipTransaction.inputs[0].fulfills.transaction_id;
                const sortedTxList = [];
                while (true) { // eslint-disable-line no-constant-condition
                    sortedTxList.push(tipTransaction);
                    try {
                        tipTransactionId = tipTransaction.inputs[0].fulfills.transaction_id
                    } catch (e) {
                        break
                    }
                    if (!tipTransactionId) {
                        break
                    }
                    tipTransaction = txList.filter((tx) => // eslint-disable-line no-loop-func
                        tx.id === tipTransactionId)[0]
                }
                return sortedTxList.reverse()
            } else {
                console.error('something went wrong while sorting transactions',
                    txList, inputTransactions)
            }
            next(txList);
        })
};

exports.listScore = function (name ,next) {
    conn.searchAssets(name)
        .then(json => {
            let output = [];
            for (const i=0 ; i< json.length; i++) {
                const data = json[i];
                console.log(i,data.data);
                output.push(data.data);
            }
            next(output)
        })
};