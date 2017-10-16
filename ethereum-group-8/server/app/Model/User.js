'use strict'

const Lucid = use('Lucid')

class User extends Lucid {
  accounts () {
    return this.hasMany('App/Model/Account')
  }
}

module.exports = User
