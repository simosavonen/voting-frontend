<template>
  <section class="section">
    <div class="is-mobile">
      <b-table :data="candidates" detailed detail-key="id">
        <template slot-scope="props">
          <b-table-column
            field="id"
            label="Candidate number"
            width="40"
            sortable
            numeric
            centered
          >
            {{ props.row.id }}
          </b-table-column>

          <b-table-column field="name" label="Name" sortable>
            {{ props.row.name }}
          </b-table-column>
          <b-table-column field="party" label="Party" sortable>
            <party-tag :party="props.row.party" />
          </b-table-column>
          <b-table-column field="profession" label="Profession" sortable>
            {{ props.row.profession }}
          </b-table-column>
          <b-table-column field="recidency" label="Residency" sortable>
            {{ props.row.recidency }}
          </b-table-column>
        </template>
        <template slot="detail" slot-scope="props">
          <article class="media">
            <figure class="media-left">
              <b-icon icon="account" size="is-large" type="is-success">
              </b-icon>
            </figure>
            <div class="media-content">
              <div class="content">
                <p>
                  <strong>{{ props.row.name }}</strong>
                  <br />
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
                  ornare magna eros, eu pellentesque tortor vestibulum ut.
                  Maecenas non massa sem. Etiam finibus odio quis feugiat
                  facilisis.
                </p>
                <nuxt-link
                  :to="`candidates/${props.row.id}`"
                  class="is-size-4 is-pulled-right"
                  >Vote</nuxt-link
                >
              </div>
            </div>
          </article>
        </template>
      </b-table>
    </div>
  </section>
</template>

<script>
import PartyTag from '@/components/PartyTag.vue'
import { mapState } from 'vuex'
export default {
  name: 'Candidates',
  components: { PartyTag },
  computed: mapState(['candidates']),
  async fetch({ store, $axios }) {
    const data = await $axios.$get('/api/candidates')
    store.commit('setCandidates', data.candidates)
  }
}
</script>
