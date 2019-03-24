export const state = () => ({
  candidates: [],
  tupasToken: null,
  tupasDetails: null,
  alreadyVoted: false
})

export const mutations = {
  setTupasToken(state, token) {
    state.tupasToken = token
    state.tupasDetails = { name: 'Juho Äänestäjä' }
  },
  setCandidates(state, data) {
    state.candidates = data
  }
}

export const actions = {
  async FETCH_CANDIDATES({ commit }) {
    const data = await this.$axios.$get('/api/candidates')
    commit('setCandidates', data.candidates)
  }
}
