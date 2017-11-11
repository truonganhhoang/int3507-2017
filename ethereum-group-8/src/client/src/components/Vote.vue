<template>
  <div>
    <div class="container">
      <h1 class="title is-2 has-text-centered">Chương trình bầu cử đơn giản</h1>

      <table class="table is-fullwidth">
        <thead>
        <tr>
          <th class="has-text-centered">#</th>
          <th class="has-text-centered">Candidate</th>
          <th class="has-text-centered">Votes</th>
          <th class="has-text-centered"></th>
        </tr>
        </thead>
        <tbody>
          <tr v-for="(candidate, index) in candidates" :key="index">
            <td class="has-text-centered">{{index}}</td>
            <td class="has-text-centered">{{candidate.name}}</td>
            <td class="has-text-centered">{{candidate.numberOfVote}}</td>
            <td class="has-text-centered">
              <button class="button is-primary" @click="voteForCandidate(candidate.name)">
                  Vote
              </button>
            </td>
          </tr>
        </tbody>
      </table>

      <em>Chú ý: Kết quả bầu cử phải mất một khoảng thời gian để thực hiện trên chuỗi khối</em>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'

  export default {
    mounted() {
      this.init()
    },
    data() {
      return {
        candidates: [],
      }
    },
    methods: {
      init() {
        const self = this
        const token = localStorage.getItem('Authorization')
        if(token) {
          axios.defaults.headers.common['Authorization'] = token
        }

        axios.post('http://localhost:3333/api/v1/voting/candidate')
        .then(function(res) {
          const data = res.data;
          var candidates = data.candidates
          for(var i = 0; i < candidates.length; i++) {
            candidates[i] = {
              name: self.hexToString(candidates[i])
            }
          }
          
          self.getVotes(candidates)
        })
      },
      getVotes(candidates) {
        const self = this
        const address = this.$route.params.address
        this.candidates = []
        for(var i = 0; i < candidates.length; i++) {
          let candidate = candidates[i]
          axios.post('http://localhost:3333/api/v1/voting/get-vote', {
            name: candidate.name,
            address
          }).then(res => {
            self.candidates.push({
              name: candidate.name,
              numberOfVote: res.data.vote
            })
          })
        }
      },
      voteForCandidate(name) {
        let passphrase = prompt("Hãy điền mật khẩu", "");
        if (passphrase == null || passphrase == "") {
          return
        } else {
          const address = this.$route.params.address
          // this.$noty.info("Wait a minute to get the result!")
          axios.post('http://localhost:3333/api/v1/voting/vote', {
            name,
            address,
            passphrase
          }).then(res => {
            this.getVotes(this.candidates)
            this.$noty.success("You voted successfully!")
          }).catch((error) => {
            this.$noty.error("You cannot vote again!")          
          }); 
        }
      },
      hexToString (hex) {
        hex = hex.substr(2)
        var string = '';
        for (var i = 0; i < hex.length; i += 2) {
          var char = String.fromCharCode(parseInt(hex.substr(i, 2), 16));
          if(char == '\u0000')
            break
          string += char 
        }
        return string;
      }
    },
  }
</script>