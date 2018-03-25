import { errorMessage } from '../../../../global/messages/action'
import { userInitialize } from '../../../../user/action'

const defaultUserSettings = {
  settings: {
    roles: ['user']
  }
}

const get = () =>
  (dispatch, getState, getFirebase) => {
    const state = getState()
    const firebase = getFirebase()
    const userid = state.firebase.auth.uid
    const firestore = firebase.firestore()
    let settings = { }
    return firestore.doc(`users/${userid}`).get()
      .then(returnQuery => {
        if (returnQuery.exists) {
          settings = returnQuery.data().settings
          dispatch(userInitialize(settings))
        } else {
          firestore.doc(`users/${userid}`).set(defaultUserSettings)
            .then(returnQuery => {
              settings = defaultUserSettings.api
              dispatch(userInitialize(settings))
            })
            .catch(error => dispatch(errorMessage(error)))
        }
      })
      .catch(error => dispatch(errorMessage(error)))
  }

const update = (id, value) =>
  (dispatch, getState, getFirebase) => {
    const state = getState()
    const firebase = getFirebase()
    const userid = state.firebase.auth.uid
    console.log(`updating users/${userid}/settings`, value)
    const updates = { settings: { } }
    updates.settings[id] = value
    const firestore = firebase.firestore()
    return firestore.doc(`users/${userid}`).set(updates, { merge: true })
      .then(returnQuery => {
        console.log(`update --> ${returnQuery}`)
        dispatch(get())
      })
      .catch(error => dispatch(errorMessage(error)))
  }

export { get, update }
