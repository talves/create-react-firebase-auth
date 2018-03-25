import {
  ERROR_MESSAGE,
  READ_ERRORS,
  NOTIFY_MESSAGE,
  READ_NOTIFICATIONS
} from './action'

const global = (state = {}, action) => {
  let { errors = [], notifications = [] } = state

  switch (action.type) {
    case READ_ERRORS:
      return Object.assign({}, state, {
        unreadErrors: action.unreadErrors,
        errors: []
      })
    case ERROR_MESSAGE:
      if (action.unreadErrors) {
        errors.push(action.message)
      } else {
        errors = []
      }
      return Object.assign({}, state, {
        unreadErrors: action.unreadErrors,
        errors
      })
    case READ_NOTIFICATIONS:
      return Object.assign({}, state, {
        unreadNotifications: action.unreadNotifications,
        notifications: []
      })
    case NOTIFY_MESSAGE:
      if (action.unreadNotifications) {
        notifications.push(action.message)
      } else {
        notifications = []
      }
      return Object.assign({}, state, {
        unreadNotifications: action.unreadNotifications,
        notifications
      })
    default:
      return state
  }
}

export default global
