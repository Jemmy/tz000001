// @ алиас к папке /src

import Vue from 'vue'
import VueNativeSock from 'vue-native-websocket'
import store from '@/_store'

Vue.use(VueNativeSock, 'wss://ws.blockchain.info/inv', {
  connectManually: true,
  format: 'json',
  reconnection: true,
  reconnectionAttempts: 5,
  reconnectionDelay: 3000,
  store: store,
  passToStoreHandler: function (eventName, event) {
    if (!eventName.startsWith('SOCKET_')) {
      return
    }

    let method = 'commit'
    let target = eventName.toUpperCase()
    let msg = event

    if (this.format === 'json' && event.data) {
      msg = JSON.parse(event.data)
    }

    this.store[method](`blockchain/${target}`, msg)
  }
})
