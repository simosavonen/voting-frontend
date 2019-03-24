export const state = () => ({
  candidates: [
    {
      id: 1,
      name: 'Ehdokas Esko',
      party: 'Keskusta',
      profession: 'Software developer',
      recidency: 'Turku'
    },
    {
      id: 2,
      name: 'Ehdokas Eija',
      party: 'Kokoomus',
      profession: 'Product owner',
      recidency: 'Naantali'
    }
  ],
  tupasToken: null,
  tupasDetails: null
})

export const mutations = {
  setTupasToken(state, token) {
    state.tupasToken = token
    state.tupasDetails = { name: 'Juho Äänestäjä' }
  }
}
