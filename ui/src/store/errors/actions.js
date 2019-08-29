export function setError (context, error) {
  this._vm.$q.notify({
    color: 'negative',
    icon: 'report_problem',
    message: error,
    position: 'center',
    timeout: 4000
  })
  context.commit('SetError', error)
}
