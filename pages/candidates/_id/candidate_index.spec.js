import { mount, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import Buefy from 'buefy'
import Candidate from './index.vue'

const localVue = createLocalVue()

localVue.use(Buefy)
localVue.use(Vuex)

describe('Candidate', () => {
  const $route = {
    params: { id: '1' }
  }
  let store
  beforeEach(() => {
    store = new Vuex.Store({
      state: {
        alreadyVoted: false
      }
    })
  })

  test('should show candidate name, profession and residency', () => {
    const wrapper = mount(Candidate, {
      store,
      localVue,
      mocks: { $route },
      stubs: ['nuxt-link']
    })
    wrapper.setData({
      selectedCandidate: {
        id: 1,
        name: 'Ehdokas Esko',
        party: 'Keskusta',
        profession: 'Software developer',
        recidency: 'Turku'
      }
    })
    const details = wrapper.findAll('p.title').wrappers.map(w => w.text())
    expect(wrapper.find('h1').text()).toBe('1 Ehdokas Esko')
    expect(details).toContain('Software developer')
    expect(details).toContain('Turku')
  })
})
