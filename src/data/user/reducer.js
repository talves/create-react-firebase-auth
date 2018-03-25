import {
  USER_AUTHENTICATE,
  USER_INITIALIZE,
  USER_INITIALIZED,
  USER_LOGGING_IN,
  USER_LOGGING_OUT,
  USER_LOGGED_IN,
  USER_LOGGED_OUT,
} from './action'

const user = (state = {}, action) => {
  switch (action.type) {
    case USER_INITIALIZE:
    case USER_INITIALIZED:
      return Object.assign({}, state, {
        settings: action.settings,
      })
    case USER_AUTHENTICATE:
    case USER_LOGGING_OUT:
    case USER_LOGGED_IN:
    case USER_LOGGED_OUT:
    case USER_LOGGING_IN:
      return Object.assign({}, state, {
        authenticated: action.loggedIn,
      })
    default:
      return state
  }
}

export default user