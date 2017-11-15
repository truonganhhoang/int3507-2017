<template>
  <div>
    <div class="container">
      <h1 class="title is-2 has-text-centered">A Simple Voting Application</h1>

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
              <button :id="'btn-vote-' + index"
                  class="button is-primary" @click="voteForCandidate(index)">
                  Vote
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'

  export default {
    mounted() {
      this.init()

      const self = this
      const address = this.$route.params.address
      axios.post('http://localhost:3333/api/v1/voting/vote', {
        name: 'Java',
        address
      }).then(res => {
        console.log(res.data)
      })
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