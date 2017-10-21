'use strict'

const Validator = use('Validator')
const Web3 = require('web3')
const web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:8545'))
const contract = require('truffle-contract');
const voting_artifacts = require('../../Truffle/build/contracts/Voting.json');
const Voting = contract(voting_artifacts);
Voting.setProvider(web3.currentProvider);

const jwt = require('jsonwebtoken')
const Config = use('Config')
const User = use('App/Model/User')
const Account = use('App/Model/Account')
const crypto = require('crypto')
const _ = require('lodash')
const async = require('async')

class UserController {

  * getAccountList(req, res) {
    const self = this
    const token = req.header('x-auth-token-app')
    if(!token) {
      res.unauthorized({error: "not auth user"})
    }
    const decoded = jwt.verify(token, Config.get('app.appKey'))
    const user = yield User.find(decoded.id)
    var accountList = yield user.accounts()
    
    for (var i = 0; i < accountList.length; i++) {
      var account = accountList[i]
      var encrypt = JSON.parse(account.encrypt)
      const balance = yield web3.eth.getBalance(encrypt.address)
      account.balance = balance
    }

    res.ok({
      accountList
    })
  }

  * newAccount (req, res) {
    const token = req.header('x-auth-token-app')
    if(!token) {
      res.unauthorized({error: "not auth user"})
    }
    const validation = yield Validator.validate(req.all(), {
      username: 'required',
      passphrase: 'required',
    })
    if (validation.fails()) { 
      res.json(validation.messages()) 
      return
    }
    const decoded = jwt.verify(token, Config.get('app.appKey'))
    const username = req.input('username')
    const passphrase = req.input('passphrase')

    const user = yield User.find(decoded.id)
    var web3Account = web3.eth.accounts.create(passphrase)
    var web3Encrypt = web3.eth.accounts.encrypt(web3Account.privateKey, passphrase)
    
    console.log(user)
    const account = new Account()
    account.username = username
    account.encrypt = JSON.stringify(web3Encrypt)
    yield user.accounts().save(account)

    var encrypt = JSON.parse(account.encrypt)
    const balance = yield web3.eth.getBalance(encrypt.address)
    account.balance = balance

    res.send({
      account
    })
  }

  * login (req, res) {
    const token = req.header('x-auth-token-app')
    if(_.isString(token)) {
      res.ok({
        login: true,
      })
      return
    }
    const user = new User()
    user.username = crypto.randomBytes(30).toString('hex');
    yield user.save()
    const newToken = jwt.sign(user.original, Config.get('app.appKey'))
    res.ok({
      token: newToken
    })
  }
}

module.exports = UserController
