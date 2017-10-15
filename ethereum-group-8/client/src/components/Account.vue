<template>
  <div class="account">
    <div class="col-md-6 col-md-offset-3">
      <div v-for="(account, index) in account_list" :key="index">
        <account-card :account="account"></account-card>
      </div>

      <form>
        <div class="form-group">
          <label for="email">Username:</label>
          <input type="text" class="form-control" id="email" v-model="account.username">
        </div>
        <div class="form-group">
          <label for="pwd">PassPhrase:</label>
          <input type="password" class="form-control" id="pwd" v-model="account.passphrase">
        </div>
        <div class="form-group">
          <label for="repwd">PassPhrase:</label>
          <input type="password" class="form-control" id="repwd" v-model="account.repassphrase">
        </div>
        <button @click="createAccount">Submit</button>
      </form> 
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import AccountCard from '@/components/AccountCard'

export default {
  data () {
    return {
      account: {
        username: '',
        passphrase: '',
        repassphrase: ''
      },
      account_list: []
    }
  },
  mounted() {
    this.updateAccountList()
  },
  methods: {
    updateAccountList() {
      const self = this
      axios.get('http://localhost:3333/api/v1/account')
      .then(function(res) {
        self.account_list = res.data.accountList
      })
    },
    createAccount() {
      const self = this
      if(self.account.passphrase != self.account.repassphrase) {
        alert('repass is not match')
        return
      }
      axios.post('http://localhost:3333/api/v1/account',
        self.account
      )
      .then(function(res) {
        // alert('create success')
        var account = res.data.account
        self.account_list.push(account)
        self.account.username = ''
        self.account.passphrase = ''
        self.account.repassphrase = ''
      })
      .catch(function(err) {
        localStorage.removeItem('x-auth-token-app')
        // location.reload()
      })
    }
  },
  components: {
    AccountCard
  }
}
</script>