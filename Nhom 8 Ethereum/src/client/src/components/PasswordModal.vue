<template>
  <div class="modal is-active">
    <div class="modal-background"></div>
    <div class="modal-card">
      <header class="modal-card-head">
        <p class="modal-card-title">Password</p>
        <button class="delete" aria-label="close" @click="close"></button>
      </header>
      <section class="modal-card-body">
        <div class="field">
          <p class="control has-icons-left">
            <input class="input" type="password" placeholder="Password" v-model="passphrase">
            <span class="icon is-small is-left">
              <i class="fa fa-lock"></i>
            </span>
          </p>
        </div>
      </section>
      <footer class="modal-card-foot">
        <button class="button is-success" @click="createAccount">OK</button>
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
        passphrase: ''
      }
    },
    methods: {
      close() {
        this.$emit('close')
      },
      clearAccount() {
        this.passphrase = ''
      },
      createAccount() {
        this.$emit('ok', this.passphrase)
        this.clearAccount()
      },
    }
  }
</script>