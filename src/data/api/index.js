/**
 * There will be no actions or reducers in API's
 * They will only be able to dispatch actions to return requests
 *
 * Import then Export API Methods for the firestore database from this file
 * Functions methods from exports will support the actions method for a thunk
 *  (params) => (dispatch, getState, getFirebase) { }
 *
 * Each path under firestore will represent a collection, document model
 *  i.e firestore/user/settings will have index.js with methods add, get, set, update, etc.
 *  export will represent the path i.e. user.settings.get
 *
 * Methods under a document would contain the method action name
 *  i.e. firestore/user would have a method logout, login, etc
 */
import * as auth from './firebase/auth'
import * as user from './firestore/user'

export { auth, user }
