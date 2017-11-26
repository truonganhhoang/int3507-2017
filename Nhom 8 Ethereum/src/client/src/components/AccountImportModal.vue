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
            <input class="input" type="email" placeholder="Username" v-model="username">
            <input type="file" name="keystore" 
              @change="filesChange($event)"> 
            <span class="icon is-small is-left">
              <i class="fa fa-envelope"></i>
            </span>
            <span class="icon is-small is-right">
              <i class="fa fa-check"></i>
            </span>
          </p>
        </div>
      </section>
      <footer class="modal-card-foot">
        <button class="button is-success" @click="importAccount">Import</button>
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
        username: '',
        keystore: ''
      }
    },
    methods: {
      close() {
        this.$emit('close')
      },
      clearAccount() {
        this.username = ''
        this.keystore = ''
      },
      importAccount() {
        if(!this.username || !this.keystore) {
          return false;
        }
        try {
          JSON.parse(this.keystore);
        } catch (e) {
          console.log(e)
          return false;
        }
        axios.post('http://localhost:3333/api/v1/account/import', {
          username: this.username,
          keystore: this.keystore
        })
        .then(res => {
          let data = res.data
          let account = data.account
          this.$emit('ok', account)
          this.close()
        })
        .catch(err => {
        })
      },
      filesChange(e) {
        let files = e.target.files || e.dataTransfer.files
        let file = files[0]
        let reader = new FileReader();
        reader.readAsText(file, "UTF-8");
        reader.onload = evt => {
          this.keystore = evt.target.result
        }
      }
    }
  }
</script>