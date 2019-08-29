import Vue from 'vue'
import { date } from 'quasar'

export function SOCKET_ONOPEN (state, event) {
  console.info('SOCKET_ONOPEN', event)
  Vue.prototype.$socket = event.currentTarget
  state.isConnected = true
}

export function SOCKET_ONCLOSE (state, event) {
  state.isConnected = false
}

export function SOCKET_ONERROR (state, event) {
  console.info(event)
}

export function SOCKET_ONMESSAGE (state, message) {
  if (message && message.wallet) {
    state.wallet = message.wallet
  }
  if (message && message.network) {
    state.network = message.network
  }
  let mtime = new Date()
  mtime = date.formatDate(mtime, 'YYYY-MM-DDTHH:mm:ss')
  state.messages.unshift({ date: mtime, message: message })
}

export function SOCKET_RECONNECT (state, count) {
  // console.info(state, count)
}

export function SOCKET_RECONNECT_ERROR (state) {
  state.reconnectError = true
}

export function CLEAR_MESSAGES (state) {
  state.messages = []
}
