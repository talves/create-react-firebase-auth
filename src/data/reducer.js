import { combineReducers } from 'redux'

import global from './global/reducer'
import user from './user/reducer'

const reducer = combineReducers({
  user,
  global
})

export default reducer
