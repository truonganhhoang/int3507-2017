<template>
  <div class="account-card">
    <div class="panel">
      <div class="panel-heading">{{account.username}}</div>
      <div class="panel-block">Address: {{account.address}}</div>
      <div class="panel-block">Balance: {{balance}}</div>
      <div class="panel-block">
        <div class="field is-grouped">
          <p class="control">
            <a class="button" 
              :href="getKeyStore(account.encrypt)"
              :download="account.address + '.txt'"
            >
            Download KeyStore
            </a>
          </p>
          <p class="control">
            <button class="button" @click="deleteAccount(account.id)">
              Delete
            </button>
          </p>
          <p class="control">
            <button class="button" @click="vote()">
              Vote App
            </button>
          </p>
          <p class="control">
            <a class="button" 
              :href="getTransaction(account.address)"
            >
            Transactions
            </a>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import {getUrl} from '../common'
import Noty from 'noty'

export default {
  props: ['account'],
  mounted() {
    this.getBalance(this.account.id)
    setInterval(() => {
      this.getBalance(this.account.id)
    }, (30 + Math.random() * 10) * 1000);
  },
  data() {
    return {
      balance: null
    }
  },
  methods: {
    getKeyStore(encrypt) {
      return 'data:text/plain;charset=utf-8,' + encodeURIComponent(encrypt)
    },
    getTransaction(address) {
      return 'https://rinkeby.etherscan.io/address/' + address
    },
    deleteAccount(id) {
      const self = this
      let result = confirm("Bạn muốn xóa không?")
      if(result) {
        axios.delete(getUrl('api/v1/account/' + id))
        .then(function(res) {
          self.$emit('delete', id)
        })
        .catch(err => {
          alert('cannot delete this account')
        })
      }
    },
    getBalance(id) {
      axios.get(getUrl('api/v1/account/' + id + '/balance'))
        .then((res) => {
          if(res.data.balance) {
            if(res.data.balance != this.balance) {
              let text = this.account.address + "'s balance changed"
              if(this.balance) {
                new Noty({
                  text,
                  type: 'success',
                  timeout: 1000
                }).show();
              }
              this.balance = res.data.balance
            }
          }
        })
    },
    vote(id) {
      const encrypt = this.account.encrypt
      const info = JSON.parse(encrypt)
      const address = info.address
      this.$router.push({name: 'Vote', params: {address}})
    }
  }
}

</script>

<style scoped>
  .account-card {
    margin-top: 10px;
    margin-bottom: 10px;  
  }
</style>