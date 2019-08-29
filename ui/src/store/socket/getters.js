export function getMessages (state) {
  return state.messages
}

export function getChatMessages (state) {
  return state.messages.filter((msg) => {
    return msg.source === 'chat'
  })
}

export function getConnectedStatus (state) {
  return state.isConnected
}

export function getReconnectErrorStatus (state) {
  return state.reconnectError
}

export function getWallet (state) {
  return state.wallet
}

export function getNetwork (state) {
  return state.network
}
