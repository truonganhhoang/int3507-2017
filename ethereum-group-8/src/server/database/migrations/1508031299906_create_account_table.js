'use strict'

const Schema = use('Schema')

class AccountsTableSchema extends Schema {

  up () {
    this.create('accounts', (table) => {
      table.increments()
      table.string('username', 80).notNullable()
      table.text('encrypt').notNullable()
      table.integer('user_id').unsigned().references('id').inTable('users')
      table.timestamps()
    })
  }

  down () {
    this.drop('accounts')
  }

}

module.exports = AccountsTableSchema
