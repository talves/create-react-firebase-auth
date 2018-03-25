import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import uiConfig from './data/config'

// Global ID for the element.
const ELEMENT_ID = 'firebaseui_container'

class FirebaseLogin extends Component {
  componentDidMount () {
    // console.log('FirebaseLogin-componentDidMount')
    const { elementId, firebaseAuth, uiConfig, authenticated } = this.props
    // console.log('FirebaseLoginUI', firebaseAuth)

    // Import the css only on the client.
    require('firebaseui/dist/firebaseui.css')

    // Firebase UI only works on the Client. So we're loading in `componentDidMount`.
    const firebaseui = require('firebaseui')
    this.firebaseUiWidget = firebaseui.auth.AuthUI.getInstance()
                          || new firebaseui.auth.AuthUI(firebaseAuth())
    if (uiConfig.signInFlow === 'popup') {
      this.firebaseUiWidget.reset()
    }
    if (!authenticated) this.firebaseUiWidget.start(`#${elementId}`, uiConfig)
  }

  componentWillUnmount () {
    // console.log('FirebaseLogin-componentWillUnmount')
    this.firebaseUiWidget.reset()
  }

  render () {
    const { className, elementId } = this.props
    return (
      <div className={className} id={elementId} />
    )
  }
}

FirebaseLogin.propTypes = {
  elementId: PropTypes.string.isRequired,
  uiConfig: PropTypes.object.isRequired,
  firebaseAuth: PropTypes.func.isRequired,
  authenticated: PropTypes.bool.isRequired,
  firebase: PropTypes.shape({
    auth: PropTypes.object.isRequired
  }),
}

const mapStateToProps = state => {
  const {
    data: {
      user: { authenticated = false },
    },
    firebase: { auth }
  } = state
  return {
    elementId: ELEMENT_ID,
    uiConfig,
    authenticated,
    auth
  }
}

export default connect(mapStateToProps)(FirebaseLogin)
