import { combineReducers } from 'redux'

import messages from './messages/reducer'

const reducer = combineReducers({
  messages
})

export default reducer
