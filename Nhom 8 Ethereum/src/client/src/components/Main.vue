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
  name: 'Main',
  data () {
    return {
      login: false,
    }
  },
  mounted () {
    const token = localStorage.getItem('Authorization')
    if(token) {
      axios.defaults.headers.common['Authorization'] = token
    }
    axios.get('http://localhost:3333/api/v1/login')
    .then(res => { 
      this.login = true
      let data = res.data
      let token = data.token
      if(!token) {
        return
      }
      localStorage.setItem('Authorization', 'Bearer ' + data.token)
      axios.defaults.headers.common['Authorization'] = localStorage.getItem('Authorization')
    })
    .catch(err => {
      console.log(err)
      localStorage.removeItem('Authorization')
      this.$router.push({name: 'Main'})
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
