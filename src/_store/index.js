import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'
import panel from './modules/panel'
import blockchain from './modules/blockchain'
import module from './modules/module'
// Для включения нового модуля
// import moduleName from './modules/moduleName'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    panel,
    blockchain,
    module
    // moduleName // Для включения нового модуля
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
