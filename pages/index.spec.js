import { mount, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import Buefy from 'buefy'
import Candidates from './index.vue'

const localVue = createLocalVue()

localVue.use(Buefy)
localVue.use(Vuex)

describe('Candidates', () => {
  let store

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
          },
          {
            id: 2,
            name: 'Ehdokas Eija',
            party: 'Kokoomus',
            profession: 'Product owner',
            recidency: 'Naantali'
          }
        ]
      }
    })
  })
  test('has two candidates in the table', () => {
    const wrapper = mount(Candidates, { store, localVue })
    expect(wrapper.findAll('table tr').wrappers).toHaveLength(2)
  })
})
