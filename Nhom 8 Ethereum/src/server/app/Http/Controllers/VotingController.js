'use strict'

const Account = use('App/Model/Account')
const User = use('App/Model/User')
const Validator = use('Validator')
const Web3 = require('web3')
const web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:8545'))
const contract = require('truffle-contract');
const voting_artifacts = require('../../Truffle/build/contracts/Voting.json');
const Voting = contract(voting_artifacts);
Voting.setProvider(web3.currentProvider);

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
    })
    if (validation.fails()) { 
      res.json(validation.messages()) 
      return
    }

    const name = req.input('name')
    const address = req.input('address')

    const account = yield Account.findBy('address', address)
    const encrypt = JSON.parse(account.encrypt)
    console.log(encrypt)

    const test = yield web3.eth.personal.unlockAccount(address, '111111')

    // const vote = yield Voting.deployed().then(instance => {
    //   return instance.voteForCandidate(name, {from: address})
    // })
    // console.log(test)
    res.send({
      // ok: test
    })
  }
}

module.exports = VotingController
