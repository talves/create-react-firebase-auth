import { combineReducers } from 'redux'
import { firebaseReducer } from 'react-redux-firebase'
import { firestoreReducer } from 'redux-firestore'

import data from './data/reducer'

const reducer = combineReducers({
  data,
  firebase: firebaseReducer,
  firestore: firestoreReducer
})

export default reducer
