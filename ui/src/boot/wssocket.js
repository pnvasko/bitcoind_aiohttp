import VueNativeSock from 'vue-native-websocket'

function passToStoreHandler (eventName, event) {
  let defaultNamespace = 'Socket'
  if (!eventName.startsWith('SOCKET_')) { return }
  let method = 'commit'
  let target = eventName.toUpperCase()
  let msg = event
  if (this.format === 'json' && event.data) {
    msg = JSON.parse(event.data)
    msg.namespace = msg.namespace || defaultNamespace
    if (msg.mutation) {
      target = [msg.namespace || '', msg.mutation].filter((e) => !!e).join('/')
    } else if (msg.action) {
      method = 'dispatch'
      console.log('action: ', msg)
      msg.namespace = msg.source !== '' ? `${msg.source.charAt(0).toUpperCase()}${msg.source.slice(1)}` : defaultNamespace
      console.log('action: ', msg.namespace)
      target = [msg.namespace || '', msg.action.toUpperCase()].filter((e) => !!e).join('/')
    } else {
      target = `${defaultNamespace}/${target}`
    }
  } else {
    target = `${defaultNamespace}/${target}`
  }
  this.store[method](target, msg)
}

export default async ({ app, router, Vue, store, params = {} }) => {
  let wsuri = process.env.WSAPI
  let sockotion = {
    store: store,
    connectManually: false,
    reconnection: true,
    reconnectionAttempts: 5,
    reconnectionDelay: 3000,
    format: 'json',
    passToStoreHandler: passToStoreHandler
  }
  Vue.use(VueNativeSock, wsuri, sockotion)
}
