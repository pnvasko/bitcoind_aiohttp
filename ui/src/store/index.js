import Vue from 'vue'
import Vuex from 'vuex'
import * as mutations from './mutations'
import * as getters from './getters'
import * as actions from './actions'
import Errors from './errors'
import Socket from './socket'

import createPersistedState from 'vuex-persistedstate'
// import createMutationsSharer, { BroadcastStrategy } from 'vuex-shared-mutations'
import createMutationsSharer from 'vuex-shared-mutations'

Vue.use(Vuex)

let state = () => {
  return {
    currentDate: new Date()
  }
}

const store = new Vuex.Store({
  state,
  getters,
  mutations,
  actions,
  modules: {
    Errors,
    Socket
  },
  plugins: [
    createPersistedState({
      key: 'wallet',
      paths: ['Socket'],
      storage: window.localStorage
    }),
    createMutationsSharer({ predicate: ['SetUserRegistration', 'RemoveUserRegistration'] })
  ]
})

export default store
