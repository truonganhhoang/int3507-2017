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
              <button class="button is-primary" @click="showModal(candidate.name)">
                  Vote
              </button>
            </td>
          </tr>
        </tbody>
      </table>

      <em>Chú ý: Kết quả bầu cử phải mất một khoảng thời gian để thực hiện trên chuỗi khối</em>
      <password-modal v-if="show_modal" @close="hideModal"
        @ok="voteForCandidate"
      >
      </password-modal>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'
  import Noty from 'noty'
  import PasswordModal from '@/components/PasswordModal'

  export default {
    showModal (name) {
      this.name = name
      this.show_modal = true
    },
    hideModal () {
      this.name = ''
      this.show_modal = false
    },
    mounted() {
      this.init()
    },
    data() {
      return {
        candidateName: [],
        candidates: [],
        name: '',
        show_modal: false
      }
    },
    methods: {
      showModal(name) {
        this.name = name
        this.show_modal = true
      },
      hideModal() {
        this.name = ''
        this.show_modal = false
      },
      init() {
        const token = localStorage.getItem('Authorization')
        if(token) {
          axios.defaults.headers.common['Authorization'] = token
        }

        axios.post('http://localhost:3333/api/v1/voting/candidate')
        .then(res => {
          const data = res.data
          let candidates = data.candidates
          candidates = candidates.map(candidate => {
            return this.hexToString(candidate)
          })
          this.candidateName = candidates
          this.getVotes()
        })
      },
      getVotes() {
        let candidateName = this.candidateName
        for(let i = 0; i < candidateName.length; i++) {
          this.getVote(candidateName[i])
        }          
      },
      getVote(name) {
        const address = this.$route.params.address
        let index = this.candidates.findIndex(element => {
          return element.name === name
        })
        axios.post('http://localhost:3333/api/v1/voting/get-vote', {
          name,
          address
        }).then(res => {
          if(index >= 0) {
            this.$set(this.candidates[index], 'numberOfVote', res.data.vote)
          } else {
            this.candidates.push({
              name,
              numberOfVote: res.data.vote
            })
          }
        })
      },
      voteForCandidate(passphrase) {
        let name = this.name
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
            this.getVote(name)
            this.hideModal()
            new Noty({
              text: 'You voted successfully!',
              type: 'success',
              timeout: 1000
            }).show();
          }).catch((error) => {
            let msg = error.response.data.msg
            this.hideModal()
            new Noty({
              text: msg,
              type: 'error',
              timeout: 1000
            }).show();
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
    components: {
      PasswordModal
    }
  }
</script>