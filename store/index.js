import tupasMockData from './tupasmockdata.json'

export const state = () => ({
  candidates: [],
  tupasDetails: null,
  voted: false
})

export const mutations = {
  setTupasDetails(state, details) {
    state.tupasDetails = details
  },
  setCandidates(state, data) {
    state.candidates = data
  },
  setVoted(state, voted) {
    state.voted = voted
  }
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
