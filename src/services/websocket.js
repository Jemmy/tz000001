import Vue from 'vue'
import VueNativeSock from 'vue-native-websocket'

Vue.use(VueNativeSock, 'wss://ws.blockchain.info/inv', {
  connectManually: true
})
