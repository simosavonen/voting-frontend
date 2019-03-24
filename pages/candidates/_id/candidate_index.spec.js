import { mount, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import Buefy from 'buefy'
import Candidate from './index.vue'

const localVue = createLocalVue()

localVue.use(Buefy)
localVue.use(Vuex)

describe('Candidate', () => {
  let store

  const $route = {
    params: { id: '1' }
  }

  beforeEach(() => {
    store = new Vuex.Store({
      state: {
        candidates: [
          {
            id: 1,
            name: 'Ehdokas Esko',
            party: 'Keskusta',
            profession: 'Software developer',
            recidency: 'Turku'
          }
        ]
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
    const details = wrapper.findAll('span').wrappers.map(w => w.text())
    expect(wrapper.find('h1').text()).toBe('1 Ehdokas Esko')
    expect(details).toContain('Software developer')
    expect(details).toContain('Turku')
  })
})
