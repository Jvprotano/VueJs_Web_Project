  
import * as types from './mutation-types'

export default {
  [types.SET_USER] (state, payload) {
    state.user = payload
  },
  [types.SET_TOKEN] (state, payload) {
    state.acessToken = payload
  },
  [types.SET_LASTNAME](state, payload) {
    state.lastName = payload
  }
}