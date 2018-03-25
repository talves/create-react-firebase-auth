import { userLogout } from '../../../user/action'
import * as settings from './settings'

const logout = () =>
  (dispatch, getState, getFirebase) => {
    const state = getState()
    const firebase = getFirebase()
    if (state.data && state.data.user && state.data.user.authenticated) {
      dispatch(userLogout(state.user))
      firebase.auth().signOut()
    }
  }

export { logout, settings }
