import { notifyMessage, errorMessage } from '../../../global/messages/action'
import { initUser, userLoggingIn, userAuthenticated, userLoggedOut } from '../../../user/action'

/**
 * Initializing Firebase Auth and watch events
 *   Only call this action function one time in your app
 *
 */
const initialize = () =>
  (dispatch, getState, getFirebase) => {
    const state = getState()
    const firebase = getFirebase()
    if (firebase && firebase.auth) {
      if (state.firebase.auth.isLoaded) {
        const message = 'Auth Initialize Error: duplicated'
        console.log(message)
        dispatch(errorMessage(message))
      } else {
        dispatch(userLoggingIn())

        // watching for auth events
        firebase.auth().onAuthStateChanged(user => {
          if (user) {
            dispatch(userLoggingIn())
            user.getIdToken().then(accessToken => {
              // User authenticated
              dispatch(userAuthenticated(accessToken))
              dispatch(notifyMessage('Logged In'))
              dispatch(initUser())
            }, null, '  ')
          } else {
            // User is signed out.
            dispatch(userLoggedOut())
          }
        },
        error => {
          console.log('Auth Error', error)
          dispatch(errorMessage(error.message))
        })
      }
    }
  }

export { initialize }
