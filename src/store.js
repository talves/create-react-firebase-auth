import { createStore, applyMiddleware, compose } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'
/* firebase imports */
import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore' // add this to use Firestore
import { reactReduxFirebase, getFirebase } from 'react-redux-firebase'
import { reduxFirestore } from 'redux-firestore'

import rootReducer from './reducer'
import * as dataConfig from './data/config'

/* Logger Middleware */
const loggerMiddleware = createLogger()

if (typeof window === 'undefined') {
  global.window = {}
}
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

/**
 *  Setup firebase, firestore configuration
 *    add enhancer for createStore
 * */
// initialize firebase instance
export const firebaseApp = firebase.initializeApp(dataConfig.firebaseConfig) // <- new to v2.*.*
// initialize Firestore
firebase.firestore()

const configureStore = preloadedState => {
  const store = createStore(
    rootReducer,
    preloadedState,
    composeEnhancers(
      applyMiddleware(
        thunkMiddleware.withExtraArgument(getFirebase), // Pass getFirebase extra argument
        loggerMiddleware // Redux logger (optional)
      ),
      reactReduxFirebase(firebase, dataConfig.rrfConfig),
      reduxFirestore(firebase)
    )
  )

  // if (module.hot) {
  //   // Enable Webpack hot module replacement for reducers
  //   module.hot.accept('./reducer', () => {
  //     const nextRootReducer = require('./reducer')
  //     store.replaceReducer(nextRootReducer)
  //   })
  // }

  return store
}

export default configureStore
