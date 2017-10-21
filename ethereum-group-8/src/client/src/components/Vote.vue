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
  export default {
    data() {
      return {
        candidates: [
          {
            name: "Java",
            numberOfVote: 0
          },
          {
            name: "PHP",
            numberOfVote: 0
          },
          {
            name: "Javascript",
            numberOfVote: 0
          }
        ],
      }
    },
  }
</script>