<template>
  <div class="account">
    <div class="container">
      <button class="button is-primary" @click="showModal">Create Account</button>
      <button class="button is-primary" @click="showImportModal">Import Account</button>
      <div v-for="(account, index) in account_list" :key="index">
        <account-card :account="account" @delete="deleteAccount"></account-card>
      </div>
      <account-modal v-if="show_modal" @close="hideModal"
        @ok="newAccount"></account-modal>
      <account-import-modal v-if="show_import_modal" @close="hideModal"
        @ok="newAccount"></account-import-modal>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import AccountCard from '@/components/AccountCard'
import AccountModal from '@/components/AccountModal'
import AccountImportModal from '@/components/AccountImportModal'
import {getUrl} from '../common'
import Noty from 'noty'

export default {
  data () {
    return {
      account_list: [],
      show_modal: false,
      show_import_modal: false
    }
  },
  mounted() {
    this.updateAccountList()
  },
  methods: {
    showModal() {
      this.show_modal = true
    },
    showImportModal() {
      this.show_import_modal = true
    },
    hideModal() {
      this.show_modal = false
      this.show_import_modal = false
    },
    updateAccountList() {
      const self = this
      axios.get(getUrl('api/v1/account'))
      .then(function(res) {
        self.account_list = res.data.accountList
      })
      .catch(err => {
        console.log(err)
      })
    },
    newAccount(account) {
      this.account_list.push(account)
      new Noty({
        text: 'wait for a minute to get test ether!',
        type: 'success',
        timeout: 1000
      }).show();
    },
    deleteAccount(id) {
      this.account_list = this.account_list.filter(acc => {
        return acc.id != id
      })
    },
  },
  components: {
    AccountCard,
    AccountModal,
    AccountImportModal
  }
}
</script>