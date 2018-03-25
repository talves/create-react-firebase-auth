import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withStyles } from 'material-ui/styles'

import LoginInfo from '../LoginInfo'
import MessagesSnackBar from '../MessagesSnackBar'
import logo from './logo.svg'

const animationId = `animated-logo${(Math.floor(Math.random() * Math.floor(100000)))}`

const styles = theme => ({
  app: {
    textAlign: 'center'
  },
  appLogo: {
    animation: `${animationId} infinite 12s linear`,
    height: 80
  },
  appHeader: {
    backgroundColor: theme.palette.secondary.main,
    height: 150,
    padding: 20,
    color: '#61DAFB'
  },
  appTitle: {
    fontSize: '1.5em'
  },
  appIntro: {
    fontSize: 'large'
  },
  [`@keyframes ${animationId}`]: {
    from: { transform: 'rotate(0deg)' },
    to: { transform: 'rotate(360deg)' }
  }
})

class AppHeader extends Component {
  render () {
    const { classes } = this.props
    return (
      <div className={classes.app}>
        <header className={classes.appHeader}>
          <img src={logo} className={classes.appLogo} alt='logo' />
          <h1 className={classes.appTitle}>React with Firestore</h1>
        </header>
        <p className={classes.appIntro}>
          This is a boilerplate for a React/Redux app using Firebase/Firestore Auth.<br />
          Styled using Material-UI
        </p>
        <LoginInfo />
        <MessagesSnackBar />
      </div>
    )
  }
}

AppHeader.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(AppHeader)
