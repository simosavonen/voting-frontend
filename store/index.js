import tupasMockData from './tupasmockdata.json'

export const state = () => ({
  // TODO
})

export const mutations = {
  // TODO
}

export const actions = {
  async TUPAS_LOGIN({ commit }) {
    const data = await this.$axios.$post('/api/login', tupasMockData)
    this.$axios.defaults.headers.common = {
      Authorization: `Bearer ${data.access_token}`
    }
    commit('setTupasDetails', data.username)
  },
  async VOTE({ commit }, candidateId) {
    await this.$axios.$post('/api/voting/vote', { candidateId })
    commit('setVoted', true)
    this.$router.replace('/')
  }
}
