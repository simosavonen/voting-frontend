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
    <img src="/tupas.png" />
    <div class="content">
      <h1>Vote candidate</h1>
      <button class="button is-large is-primary">Vote</button>
    </div>
  </section>
</template>

<script>
// import { mapState } from 'vuex'
export default {
  name: 'Vote',
  computed: {
    selectedCandidate() {
      return this.$route.params.selectedCandidate
    }
  },
  methods: {}
}
</script>
<style lang="scss">
.mdi-large-candidate {
  font-size: 5rem;
}
</style>
