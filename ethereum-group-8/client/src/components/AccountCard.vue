<template>
  <div class="account-card">
    <div class="panel panel-primary">
      <div class="panel-heading">{{account.username}}</div>
      <div class="panel-body">Account Balance: {{ account.balance }}</div>
      <button @click="getKeyStore(account.encrypt)">KeyStore</button>
      <button @click="deleteAccount(account.id)">Delete</button>
      <button @click="vote(account.id)">Vote App</button>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  props: ['account'],
  methods: {
    deleteAccount(id) {
      alert('delete')
    },
    getKeyStore(encrypt) {
      alert(encrypt)
    },
    vote(id) {
      this.$router.push({name: 'Vote', params: {id}})
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