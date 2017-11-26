<template>
  <div class="modal is-active">
    <div class="modal-background"></div>
    <div class="modal-card">
      <header class="modal-card-head">
        <p class="modal-card-title">Modal title</p>
        <button class="delete" aria-label="close" @click="close"></button>
      </header>
      <section class="modal-card-body">
        <div class="field">
          <p class="control has-icons-left has-icons-right">
            <input class="input" type="email" placeholder="Username" v-model="account.username">
            <span class="icon is-small is-left">
              <i class="fa fa-envelope"></i>
            </span>
            <span class="icon is-small is-right">
              <i class="fa fa-check"></i>
            </span>
          </p>
        </div>
        <div class="field">
          <p class="control has-icons-left">
            <input class="input" type="password" placeholder="Password" v-model="account.passphrase">
            <span class="icon is-small is-left">
              <i class="fa fa-lock"></i>
            </span>
          </p>
        </div>
        <div class="field">
          <p class="control has-icons-left">
            <input class="input" type="password" placeholder="Re Enter Password" 
              v-model="account.repass">
            <span class="icon is-small is-left">
              <i class="fa fa-lock"></i>
            </span>
          </p>
        </div>
      </section>
      <footer class="modal-card-foot">
        <button class="button is-success" @click="createAccount">Create</button>
        <button class="button" @click="close">Cancel</button>
      </footer>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'

  export default {
    data () {
      return {
        account: {
          username: '',
          passphrase: '',
          repass: ''
        },
      }
    },
    methods: {
      close() {
        this.$emit('close')
      },
      clearAccount() {
        const self = this
        self.account.username = ''
        self.account.passphrase = ''
        self.account.repass = ''
      },
      createAccount() {
        const self = this
        if(self.account.passphrase != self.account.repass) {
          alert('repass is not match')
          return
        }
        axios.post('http://localhost:3333/api/v1/account',
          self.account
        )
        .then(function(res) {
          // alert('create success')
          var account = res.data.account
          self.$emit('ok', account)
          self.clearAccount()
          self.close()
        })
        .catch(function(err) {
          localStorage.removeItem('Authorization')
          self.clearAccount()
          self.close()
          this.$router.push({name: 'Main'})
        })
      },
    }
  }
</script>