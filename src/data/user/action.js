import {
  auth,
  user
} from '../api'

export const USER_AUTHENTICATE = 'USER_AUTHENTICATE'
export const USER_INITIALIZE = 'USER_INITIALIZE'
export const USER_INITIALIZED = 'USER_INITIALIZED'
export const USER_LOGGING_IN = 'USER_LOGGING_IN'
export const USER_LOGGING_OUT = 'USER_LOGGING_OUT'
export const USER_LOGGED_IN = 'USER_LOGGED_IN'
export const USER_LOGGED_OUT = 'USER_LOGGED_OUT'

export const defaultUser = (user = {}) =>
  ({
    authenticated: user.authenticated
  })

export const authUser = () => ({
  type: USER_AUTHENTICATE,
  loggedIn: false
})

export const userLoggingIn = () => ({
  type: USER_LOGGING_IN
})

export const userInitialize = settings => ({
  type: USER_INITIALIZE,
  settings
})

export const userInitialized = () => ({
  type: USER_INITIALIZED
})

export const userAuthenticated = uid => ({
  type: USER_LOGGED_IN,
  loggedIn: true,
  uid
})

export const userLogout = () => ({
  type: USER_LOGGING_OUT,
  loggedIn: false
})

export const userLoggedOut = () => ({
  type: USER_LOGGED_OUT,
  loggedIn: false
})

export const initUser = () =>
  (dispatch, getState, getFirebase) => {
    const state = getState()
    if (state && state.firebase && state.firebase.auth && state.firebase.auth.uid) {
      dispatch(user.settings.get())
    }
  }

export const initAuth = auth.initialize

export const logoutUser = user.logout

export const updateSettings = user.settings.update
