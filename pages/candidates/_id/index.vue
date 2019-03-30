<template>
  <section class="section">
    <nav class="breadcrumb" aria-label="breadcrumbs">
      <ul>
        <li><nuxt-link to="/">Candidates</nuxt-link></li>
        <li class="is-active">
          <a href="#" aria-current="page">{{ selectedCandidate.name }}</a>
        </li>
      </ul>
    </nav>
    <div class="content">
      <div class="level is-mobile">
        <div class="level-item">
          <div>
            <h1>{{ selectedCandidate.id }} {{ selectedCandidate.name }}</h1>
            <party-tag :party="selectedCandidate.party" />
          </div>
        </div>
        <div class="level-item">
          <b-icon
            icon="account"
            custom-size="mdi-large-candidate"
            type="is-success"
          >
          </b-icon>
        </div>
      </div>
      <div class="columns">
        <div class="column">
          <div class="level is-mobile">
            <div class="level-item has-text-centered">
              <div>
                <p class="heading">Recidency</p>
                <p class="title">{{ selectedCandidate.recidency }}</p>
              </div>
            </div>
            <div class="level-item has-text-centered">
              <div>
                <p class="heading">Profession</p>
                <p class="title">{{ selectedCandidate.profession }}</p>
              </div>
            </div>
            <div class="level-item has-text-centered">
              <div>
                <p class="heading">Age</p>
                <p class="title">{{ selectedCandidate.age }}</p>
              </div>
            </div>
          </div>
        </div>
        <div class="column">
          <div class="level is-mobile">
            <div class="level-item has-text-centered">
              <div>
                <p class="heading">Education</p>
                <p class="title">{{ selectedCandidate.education }}</p>
              </div>
            </div>
            <div class="level-item has-text-centered">
              <div>
                <p class="heading">Election budget</p>
                <p class="title">1000 €</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <p>
          Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
          posuere cubilia Curae; Cras feugiat, dui sed volutpat pharetra, eros
          lacus hendrerit urna, at euismod ex tellus non nulla. Pellentesque
          rutrum lectus non massa tristique, vel fermentum leo scelerisque.
          Morbi ut risus sit amet quam euismod lobortis. Quisque venenatis justo
          vitae tortor imperdiet scelerisque. Pellentesque faucibus auctor metus
          vel blandit. Interdum et malesuada fames ac ante ipsum primis in
          faucibus. Integer et est vestibulum ligula elementum ornare. Ut sed
          tincidunt nibh. Sed id felis et nisi interdum scelerisque. Sed viverra
          vestibulum ex nec maximus.
        </p>
      </div>
      <div>
        <nuxt-link
          :to="{
            name: 'vote',
            params: { selectedCandidate }
          }"
          :disabled="alreadyVoted"
          class="button is-large is-primary is-pulled-right"
        >
          Authorize and vote
        </nuxt-link>
      </div>
    </div>
  </section>
</template>

<script>
import { mapState } from 'vuex'
import PartyTag from '@/components/PartyTag.vue'
export default {
  name: 'Candidate',
  components: { PartyTag },
  data() {
    return {
      selectedCandidate: {}
    }
  },
  computed: {
    ...mapState(['alreadyVoted'])
  },
  async asyncData({ params, $axios }) {
    const data = await $axios.$get(`/api/candidates/${params.id}`)
    return { selectedCandidate: data }
  }
}
</script>
<style lang="scss">
.mdi-large-candidate {
  font-size: 5rem;
}
</style>
