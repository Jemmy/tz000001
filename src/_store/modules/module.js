const state = {
  loaded: false
}

const getters = {
  getState: (state) => state.loaded
}

const actions = {
  loaded ({ commit }) {
    commit('state', true)
  }
}

const mutations = {
  state: (state, payload) => {
    state.loaded = payload
  }
}

export default {
  namespaced: true,
  state,
  actions,
  getters,
  mutations
}
