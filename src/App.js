import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles'
import CssBaseline from 'material-ui/CssBaseline'

import Auth from './components/Auth'
import AppHeader from './components/AppHeader'
import configureStore from './store'
const store = configureStore()

/**
 * https://material.io/color/
 */
const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#5cbdea',
      main: '#108db8',
      dark: '#006088',
      contrastText: '#fff'
    },
    secondary: {
      light: '#2a4551',
      main: '#001e29',
      dark: '#000000',
      contrastText: '#fff'
    }
  }
})

class App extends Component {
  render () {
    return (
      <Provider store={store}>
        <MuiThemeProvider theme={theme}>
          <Auth>
            <div>
              <CssBaseline />
              <AppHeader />
            </div>
          </Auth>
        </MuiThemeProvider>
      </Provider>
    )
  }
}

export default App
