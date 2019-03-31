import { mount, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import Buefy from 'buefy'
import Vote from './index.vue'

const localVue = createLocalVue()

localVue.use(Buefy)
localVue.use(Vuex)

describe('Vote', () => {
  let store
  let actions
  const $route = {
    params: { selectedCandidate: { id: 1 } }
  }
  const $router = {
    replace: jest.fn()
  }

  beforeEach(() => {
    actions = {
      VOTE: jest.fn()
    }
    store = new Vuex.Store({
      state: {
        candidates: [
          {
            id: 1,
            name: 'Ehdokas Esko',
            party: 'Keskusta',
            profession: 'Software developer',
            residency: 'Turku'
          }
        ],
        tupasDetails: 'dummy'
      },
      actions
    })
  })
  test('clicking vote should trigger VOTE action', () => {
    const wrapper = mount(Vote, {
      store,
      localVue,
      mocks: { $route, $router },
      stubs: ['nuxt-link']
    })
    wrapper.find('button').trigger('click')
    expect(actions.VOTE).toHaveBeenCalled()
  })
})
