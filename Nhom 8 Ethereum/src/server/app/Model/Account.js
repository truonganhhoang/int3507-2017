'use strict'

const Lucid = use('Lucid')

class Account extends Lucid {
  user () {
    return this.belongsTo('App/Model/User')
  }
}

module.exports = Account
