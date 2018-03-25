export const ERROR_MESSAGE = 'ERROR_MESSAGE'
export const READ_ERRORS = 'READ_ERRORS'
export const NOTIFY_MESSAGE = 'NOTIFY_MESSAGE'
export const READ_NOTIFICATIONS = 'READ_NOTIFICATIONS'

export const errorMessage = message => ({
  type: ERROR_MESSAGE,
  message,
  unreadErrors: true
})

export const readErrorMessages = () => ({
  type: READ_ERRORS,
  unreadErrors: false
})

export const notifyMessage = message => ({
  type: NOTIFY_MESSAGE,
  message,
  unreadNotifications: true
})
export const readNotifications = () => ({
  type: READ_NOTIFICATIONS,
  unreadNotifications: false
})
