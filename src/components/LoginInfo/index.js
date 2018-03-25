import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import UserInfo from './components/UserInfo'
import Login from '../Login'

class LoginInfo extends Component {
  render () {
    const { authenticated } = this.props
    console.log('LoginInfo props', this.props)
    return (
      <div>
        { (authenticated) && <UserInfo /> }
        { (!authenticated) && <Login /> }
      </div>
    )
  }
}

LoginInfo.propTypes = {
  authenticated: PropTypes.bool
}

const mapStateToProps = state => {
  const { data: { user: {authenticated} } } = state
  return {
    authenticated
  }
}

export default connect(mapStateToProps)(LoginInfo)