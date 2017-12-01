'use strict'

const Account = use('App/Model/Account')
const User = use('App/Model/User')
const Validator = use('Validator')
const Web3 = require('web3')
const web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:8545'))
const contract = require('truffle-contract')
const voting_artifacts = require('../../Truffle/build/contracts/Voting.json')
const Voting = contract(voting_artifacts)
Voting.setProvider(web3.currentProvider)

// dirty fix of truffle contract for web3 1.0
if (typeof Voting.currentProvider.sendAsync !== "function") {
  Voting.currentProvider.sendAsync = function() {
    return Voting.currentProvider.send.apply(
      Voting.currentProvider, arguments
    );
  };
}

class VotingController {
  * getCandidateList (req, res) {
    const candidates = yield Voting.deployed().then(instance => {
      return instance.getCandidates()
    })
    res.send({
      candidates
    })
  }

  * totalVotesFor (req, res) {
    const validation = yield Validator.validate(req.all(), {
      name: 'required',
      address: 'required',
    })
    if (validation.fails()) { 
      res.json(validation.messages()) 
      return
    }

    const name = req.input('name')
    const address = req.input('address')

    const vote = yield Voting.deployed().then(instance => {
      return instance.totalVotesFor(name)
    })

    res.send({
      vote
    })
  }

  * voteForCandidate (req, res) {
    const validation = yield Validator.validate(req.all(), {
      name: 'required',
      address: 'required',
      passphrase: 'required',
    })
    if (validation.fails()) { 
      res.json(validation.messages()) 
      return
    }

    const name = req.input('name')
    const address = req.input('address')
    const passphrase = req.input('passphrase')

    const account = yield Account.findBy('address', address)

    try {
      yield web3.eth.personal.unlockAccount(account.address, passphrase, 1000)
    } catch(error) {
      return res.badRequest({
        msg: 'wrong passphrase'
      })
    }

    let voted = yield Voting.deployed().then(instance => {
      return instance.voted({from: account.address})
    })

    if(voted != 0) {
      return res.badRequest({
        msg: 'you voted'
      })
      return
    }

    yield Voting.deployed().then(instance => {
      return instance.voteForCandidate(name, {from: account.address})
    })
    res.send({
      voted: true
    })
  }

  * voted () {
    const validation = yield Validator.validate(req.all(), {
      address: 'required',
    })
    if (validation.fails()) { 
      res.json(validation.messages()) 
      return
    }

    const address = req.input('address')

    const account = yield Account.findBy('address', address)

    try {
      yield web3.eth.personal.unlockAccount(account.address, passphrase, 1000)
    } catch(error) {
      return res.badRequest({
        msg: 'wrong passphrase'
      })
    }

    let voted = yield Voting.deployed().then(instance => {
      return instance.voted({from: account.address})
    })

    res.send({
      voted
    })
  }
}

module.exports = VotingController
