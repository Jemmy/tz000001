import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'
import panel from './modules/panel'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    panel
  },
  plugins: [
    createPersistedState({
      key: 'tz_ls'
    })
  ]
})
