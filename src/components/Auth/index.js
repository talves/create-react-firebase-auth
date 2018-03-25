import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { initAuth } from '../../data/user/action'

class Auth extends React.Component {
  componentWillMount () {
    const { dispatch } = this.props
    dispatch(initAuth())
  }
  render () {
    return (
      <div>
        {this.props.children}
      </div>
    )
  }
}

Auth.propTypes = {
  children: PropTypes.element.isRequired
}

const mapStateToProps = state => {
  return { }
}

export default connect(mapStateToProps)(Auth)
