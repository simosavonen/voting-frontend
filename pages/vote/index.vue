<template>
  <section class="section">
    <nav class="breadcrumb" aria-label="breadcrumbs">
      <ul>
        <li><nuxt-link to="/">Candidates</nuxt-link></li>
        <li>
          <nuxt-link
            :to="`/candidates/${selectedCandidate.id}`"
            aria-current="page"
            >{{ selectedCandidate.name }}
          </nuxt-link>
        </li>
        <li class="is-active">
          <a href="#" aria-current="page">Authorize and vote</a>
        </li>
      </ul>
    </nav>
    <img v-if="!tupasToken" src="/tupas.png" @click="tupasLogin" />
    <div v-else class="content">
      <h1>Vote candidate</h1>
      <button class="button is-large is-primary" @click="vote">Vote</button>
    </div>
  </section>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'Vote',
  computed: {
    ...mapState(['tupasToken']),
    selectedCandidate() {
      return this.$route.params.selectedCandidate
    }
  },
  methods: {
    tupasLogin() {
      this.$store.commit('setTupasToken', 'faketoken')
    },
    vote() {
      this.$store.dispatch('VOTE', this.selectedCandidate.id)
      this.$router.replace('/')
    }
  }
}
</script>
<style lang="scss">
.mdi-large-candidate {
  font-size: 5rem;
}
</style>
