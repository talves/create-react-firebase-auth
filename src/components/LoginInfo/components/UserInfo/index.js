import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { withStyles } from 'material-ui/styles'
import Card, { CardContent } from 'material-ui/Card'
import Typography from 'material-ui/Typography'
import Button from 'material-ui/Button'
import Avatar from 'material-ui/Avatar'
import moment from 'moment'

import { logoutUser } from '../../../../data/user/action'

const styles = theme => ({
  row: {
    display: 'flex',
    justifyContent: 'center'
  },
  card: {
    display: 'flex',
    padding: '1rem',
    maxWidth: 420,
    maxHeight: 280
  },
  details: {
    display: 'flex',
    flexDirection: 'column'
  },
  content: {
    flex: '1 0 auto'
  },
  title: {
    marginBottom: 16,
    fontSize: 20
  },
  date: {
    marginBottom: 10,
    fontSize: 12
  },
  button: {
    margin: theme.palette.unit
  },
  pos: {
    marginBottom: 12
  },
  avatar: {
    margin: 5,
    width: 120,
    height: 120,
    borderRadius: '10%'
  }
})

class UserInfo extends Component {
  constructor (props) {
    super(props)

    /* Setup event for logout click */
    this.handleLogoutClick = this.handleLogoutClick.bind(this)
  }

  componentDidMount () {
  }

  componentWillUnmount () {
  }

  handleLogoutClick (e) {
    e.preventDefault()

    const { dispatch } = this.props
    dispatch(logoutUser())
  }

  render () {
    const { authenticated, auth, classes } = this.props
    return (
      <div className={classes.row}>
        {authenticated &&
          <Card className={classes.card}>
            <div className={classes.details}>
              <CardContent className={classes.content}>
                <Typography className={classes.title}>{auth.displayName}</Typography><br />
                <Typography className={classes.date}>{` (last login: ${moment(new Date(Number.parseInt(auth.lastLoginAt, 10))).format('YYYY-MM-DD hh:mm:ss a')})`}</Typography><br />
                <Button variant='raised' color='secondary' className={classes.button} onClick={this.handleLogoutClick}>Logout</Button>
              </CardContent>
            </div>
            <Avatar
              alt={auth.displayName}
              src={auth.photoURL}
              className={classes.avatar}
            />
          </Card>
        }
      </div>
    )
  }
}

UserInfo.propTypes = {
  authenticated: PropTypes.bool.isRequired,
  auth: PropTypes.object,
  dispatch: PropTypes.func,
  classes: PropTypes.object.isRequired
}

const mapStateToProps = state => {
  const { data: { user = { } } } = state
  const { authenticated = false } = user
  const {
    firebase: { auth }
  } = state
  return {
    authenticated,
    auth
  }
}

export default connect(mapStateToProps)(withStyles(styles)(UserInfo))
