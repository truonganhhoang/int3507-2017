'use strict'

// for ethereum
const Web3 = require('web3')
const web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:8545'))

// for backend
const Validator = use('Validator')
const Config = use('Config')
const User = use('App/Model/User')
const Account = use('App/Model/Account')
const crypto = require('crypto')
const _ = require('lodash')

class UserController {

  * getAccountList(req, res) {
    const self = this
    const user = req.auth.user
    const realUser = yield User.find(user.id)
    var accountList = yield realUser.accounts().fetch()
    res.ok({
      accountList
    })
  }

  * login (req, res) {
    const isLoggedIn = yield req.auth.check()
    if(isLoggedIn) {
      res.ok({
        user: req.auth.user,
      })
      return
    }

    const user = new User()
    const apiKey = Config.get('app.appKey')
    user.username = crypto.randomBytes(30).toString('hex')
    user.password = apiKey
    yield user.save()
    const newToken = yield req.auth.attempt(user.username, apiKey)
    res.ok({
      token: newToken,
      user
    })
  }
}

module.exports = UserController
