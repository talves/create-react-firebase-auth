import React from 'react'
import { withFirebase } from 'react-redux-firebase'

import FirebaseLogin from '../FirebaseLogin'

const Login = ({ firebase: { auth } }) =>
  <FirebaseLogin firebaseAuth={auth} />

export default withFirebase(Login)
