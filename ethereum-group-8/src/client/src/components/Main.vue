<template>
  <div class="main">
    <div v-if="login">
      <account></account>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import Account from '@/components/Account'

export default {
  name: 'HelloWorld',
  data () {
    return {
      login: false
    }
  },
  mounted () {
    var self = this
    const token = localStorage.getItem('x-auth-token-app')
    if(token) {
      axios.defaults.headers.common['x-auth-token-app'] = token
    }
    axios.get('http://localhost:3333/api/v1/login')
      .then(function(res) {
        const data = res.data
        self.login = true
        if(data.login) {
          return
        }
        localStorage.setItem('x-auth-token-app', data.token)
        axios.defaults.headers.common['x-auth-token-app'] = localStorage.getItem('x-auth-token-app')
      })
  },
  components: {
    Account
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
