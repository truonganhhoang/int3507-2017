<template>
  <div class="account-card">
    <div class="panel">
      <div class="panel-heading">{{account.username}}</div>
      <div class="panel-block">
        Account Balance: {{ account.balance }} &nbsp;
        <div class="field is-grouped">
          <p class="control">
            <a class="button" 
              :href="getKeyStore(account.encrypt)"
            >
            Raw KeyStore
            </a>
          </p>
          <p class="control">
            <button class="button" @click="deleteAccount(account.id)">
              Delete
            </button>
          </p>
          <p class="control">
            <button class="button" @click="vote(account.id)">
              Vote App
            </button>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  props: ['account'],
  methods: {
    getKeyStore(encrypt) {
      return 'data:text/json;charset=utf-8,' + encodeURIComponent(encrypt)
    },
    deleteAccount(id) {
      alert('delete')
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