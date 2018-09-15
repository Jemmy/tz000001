const state = {
  sum: 0,
  transactions: [],
  socket: {
    isConnected: false,
    instance: null
  }
}
const actions = {
  reset ({ commit }) {
    commit('reset')
  }
}

const getters = {
  getTransactions: (state) => state.transactions,
  getSum: (state) => state.sum,
  isConnected: (state) => state.socket.isConnected
}

const mutations = {
  SOCKET_ONOPEN (state, event) {
    state.socket.isConnected = true
    state.socket.instance = event.target
    state.socket.instance.sendObj({ 'op': 'ping' })
  },
  SOCKET_ONCLOSE (state, event) {
    state.socket.instance = null
    state.socket.isConnected = false
  },
  SOCKET_ONERROR (state, event) {
    state.socket.isConnected = false
  },
  SOCKET_ONMESSAGE (state, message) {
    if (message.op === 'pong') {
      state.socket.instance.sendObj({ 'op': 'unconfirmed_sub' })
    } else if (message.op === 'utx') {
      let sum = 0

      let transaction = {
        from: window._.map(message.x.inputs, (input) => input.prev_out.addr),
        to: window._.map(message.x.out, (out) => {
          sum += out.value
          return out.addr
        }),
        sum: 0
      }

      transaction.sum = sum

      state.sum += sum

      state.transactions.unshift(transaction)
    }
  },
  reset (state) {
    state.sum = 0
    state.transactions = []
  }
}

export default {
  namespaced: true,
  state,
  actions,
  getters,
  mutations
}
