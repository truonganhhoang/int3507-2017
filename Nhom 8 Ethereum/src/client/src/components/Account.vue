<template>
  <div class="account">
    <div class="container">
      <button class="button is-primary" @click="showModal">Create Account</button>
      <div v-for="(account, index) in account_list" :key="index">
        <account-card :account="account" @delete="deleteAccount"></account-card>
      </div>
      <account-modal v-if="show_modal" @close="hideModal"
        @ok="newAccount"></account-modal>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import AccountCard from '@/components/AccountCard'
import AccountModal from '@/components/AccountModal'

export default {
  data () {
    return {
      account_list: [],
      show_modal: false
    }
  },
  mounted() {
    this.updateAccountList()
  },
  methods: {
    showModal() {
      this.show_modal = true
    },
    hideModal() {
      this.show_modal = false
    },
    updateAccountList() {
      const self = this
      axios.get('http://localhost:3333/api/v1/account')
      .then(function(res) {
        self.account_list = res.data.accountList
      })
    },
    newAccount(account) {
      this.account_list.push(account)
    },
    deleteAccount(id) {
      this.account_list = this.account_list.filter(acc => {
        return acc.id != id
      })
    },
  },
  components: {
    AccountCard,
    AccountModal
  }
}
</script>