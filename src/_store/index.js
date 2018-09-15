import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'
import panel from './modules/panel'
import blockchain from './modules/blockchain'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    panel,
    blockchain
  },
  plugins: [
    createPersistedState({
      key: 'tz_ls',
      paths: [
        'panel'
      ]
    })
  ]
})
