'use strict'

const Account = use('App/Model/Account')
const User = use('App/Model/User')
const Validator = use('Validator')
const Web3 = require('web3')
const web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:8545'))
const _ = require('lodash')
const os = require('os')
var fs = require('fs')

class AccountController {
  * create (req, res) {
    const validation = yield Validator.validate(req.all(), {
      username: 'required',
      passphrase: 'required',
    })
    if (validation.fails()) { 
      res.json(validation.messages()) 
      return
    }

    const username = req.input('username')
    const passphrase = req.input('passphrase')
    const user = req.auth.user
    const realUser = yield User.find(user.id)
    var web3Account = web3.eth.accounts.create(passphrase)
    var web3Encrypt = web3.eth.accounts.encrypt(web3Account.privateKey, passphrase)
    
    const account = new Account()
    account.username = username
    account.encrypt = JSON.stringify(web3Encrypt)
    account.address = web3Encrypt.address
    yield account.save()
    yield realUser.accounts().save(account)

    let filedir = os.homedir() + '/.ethereum/rinkeby/keystore/' + account.address + '.txt'
    fs.writeFileSync(filedir, account.encrypt)

    // give ether for test 
    let adminAddr = '4b3e6c4f32afa38c39546ba501d89339ed4f52ae'
    let password = '111111'
    yield web3.eth.personal.unlockAccount(adminAddr, password, 2000)
    web3.eth.sendTransaction({
      from: adminAddr,
      to: account.address,
      value: '200000000000000000'
    })

    res.send({
      account
    })
  }

  * import (req, res) {
    const validation = yield Validator.validate(req.all(), {
      username: 'required',
      keystore: 'required',
    })
    if (validation.fails()) { 
      res.json(validation.messages()) 
      return
    }

    let username = req.input('username')
    let keystore = JSON.parse(req.input('keystore'))
    let user = req.auth.user
    let realUser = yield User.find(user.id)
    
    let account = new Account()
    account.username = username
    account.encrypt = JSON.stringify(keystore)
    account.address = keystore.address
    yield account.save()
    yield realUser.accounts().save(account)

    let filedir = os.homedir() + '/.ethereum/rinkeby/keystore/' + account.address + '.txt'
    fs.writeFileSync(filedir, account.encrypt)

    res.send({
      account
    })
  }

  * delete (req, res) {
    const validation = yield Validator.validate(req.params(), {
      id: 'required',
    })

    if (validation.fails()) { 
      res.json(validation.messages()) 
      return
    }

    const id = req.param('id')
    const user = req.auth.user
    const accountList = yield user.accounts().fetch()
    const accounts = _.toArray(accountList)
    
    // check in accounts
    const ok = accounts.find(acc => {
      return acc.id == id
    })

    if(!ok) {
      return res.badRequest({
        error: 'you do not own this account'
      })
    }

    const account = yield Account.find(id)
    yield account.delete()

    res.send({
      ok: true
    })
  }

  * getBalance(req, res) {
    const validation = yield Validator.validate(req.params(), {
      id: 'required',
    })
    if (validation.fails()) { 
      res.json(validation.messages()) 
      return
    }
    const id = req.param('id')
    const account = yield Account.find(id)
    let balance = yield web3.eth.getBalance(account.address)
    balance = web3.utils.fromWei(balance)
    res.json({balance});
  }

  // * unlock (req, res) {
  //   const validation = yield Validator.validate(req.all(), {
  //     address: 'required',
  //     passphrase: 'required',
  //   })
  //   if (validation.fails()) { 
  //     res.json(validation.messages()) 
  //     return
  //   }

  //   const address = req.input('address')
  //   const passphrase = req.input('passphrase')
    
  //   const user = req.auth.user

  //   var web3Account = web3.eth.accounts.create(passphrase)
  //   var web3Encrypt = web3.eth.accounts.encrypt(web3Account.privateKey, passphrase)
    
  //   const account = new Account()
  //   account.username = username
  //   account.encrypt = JSON.stringify(web3Encrypt)
  //   yield realUser.accounts().save(account)

  //   res.send({
  //     account
  //   })
  // }
}

module.exports = AccountController
