import React from 'react';
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import Button from 'material-ui/Button';
import Snackbar from 'material-ui/Snackbar';
import Fade from 'material-ui/transitions/Fade';

import { readNotifications } from '../../data/global/messages/action'

class FadeSnackbar extends React.Component {
  state = {
    open: false,
  };

  handleClick = () => {
    this.setState({ open: true });
  };
  
  handleClose = () => {
    const { dispatch } =this.props
    dispatch(readNotifications())
    this.setState({ open: false });
  };

  componentWillMount() {
    const {open} = this.props
    this.setState({ open })
  }
  render() {
    const {notifications} = this.props
    return (
      <div>
        {notifications && (notifications.length !== 0) && <Button onClick={this.handleClick}>Show Notifications</Button>}
        {notifications && notifications.map(message => { 
          const randomID = Math.floor(Math.random() * Math.floor(5000))
          return (
          <Snackbar
            key={randomID}
            anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
            autoHideDuration={2000}
            open={this.state.open}
            onClose={this.handleClose}
            transition={Fade}
            SnackbarContentProps={{
              'aria-describedby': `message-id-${randomID}`,
            }}
            message={<span id={`message-id-${randomID}`}>{message}</span>}
          />
        )
      })}
      </div>
    );
  }
}

FadeSnackbar.propTypes = {
  notifications: PropTypes.array,
  open: PropTypes.bool
}

const mapStateToProps = state => {
  const { data: { global: {messages: { notifications = [], readNotifications = true } } } } = state
  return {
    notifications,
    open: readNotifications
  }
}

export default connect(mapStateToProps)(FadeSnackbar);
