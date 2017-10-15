'use strict';
var express = require('express');
var router = express.Router();
var controller = require('../controllers/BigchainController');
const sampleJson = {
  "name": "Hello It's me",
  "score": 10
};
router.post('/create', function (req,res) {
    console.log("Create transaction ",req.body);
    controller.pushData(req.body, function (retrievedTx) {
        console.log("Create transition id: ",retrievedTx.id);
        res.json(retrievedTx.id);
    });
});

router.get('/search=:text', function(req,res) {
    controller.searchAssets(req.params.text, function (json) {
        console.log("search assets ", req.params.text," output:\n",json);
        res.send(json);
    })
});

router.get('/listblocks/transactionID=:id', function (req,res) {
    controller.listBlock(req.params.id,"", function(json){
        console.log("Listblock output:\n",json);
        res.send(json);
    })
});

router.get('/listblocks/transactionID=:id/status=:status', function (req,res) {
    controller.listBlock(req.params.id,req.params.status, function(json){
        console.log("Listblock output:\n",json);
        res.send(json);
    })
});

router.get('/listTransactions/assetId=:id', function (req,res) {
    controller.listTransaction(req.params.id,"", function (json) {
        console.log("ListTransaction output:\n",json);
        res.send(json);
    })
});

router.get('/listTransactions/assetId=:id/operation=:operation', function (req,res) {
   controller.listTransaction(req.params.id,req.params.operation, function (json) {
       console.log("ListTransaction output:\n",json);
       res.send(json);
   })
});

router.get('/listOutputs/key=:key', function (req,res) {
    controller.listOutputs(req.params.key,"", function (json) {
        console.log("listOutputs output:\n",json);
        res.send(json);
    })
});

router.get('/listOutputs/key=:key/spent=:spent', function (req,res) {
    controller.listOutputs(req.params.key,req.params.spent, function (json) {
        console.log("listOutputs output:\n",json);
        res.send(json);
    })
});

router.get('/listScore/course=:name', function (req,res) {
    console.log("listscore");
    controller.listScore(req.params.name, function (data) {
        res.json(data);
    })
});

router.get('/transaction/:id', function( req,res){
   controller.getTransaction(req.params.id, function(json) {
       console.log("transaction ",req.params.id," :", json);
       res.send(json);
   })
});

module.exports = router;
