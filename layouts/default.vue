<template>
  <div>
    <nav
      class="navbar header has-shadow is-primary"
      role="navigation"
      aria-label="main navigation"
    >
      <div class="navbar-brand navbar-menu">
        <div class="navbar-start">
          <a class="navbar-item" href="/"
            >2019 Finnish parliamentary election</a
          >
        </div>
        <div class="navbar-end">
          <div class="navbar-item">
            {{ tupasDetails }}
          </div>
        </div>
      </div>
    </nav>

    <section class="main-content columns">
      <div class="container column is-10">
        <nuxt />
      </div>
    </section>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  data() {
    return {
      items: [
        {
          title: 'Candidates',
          icon: 'account-card-details',
          to: { name: 'index' }
        }
      ]
    }
  },
  computed: mapState(['tupasDetails'])
}
</script>
