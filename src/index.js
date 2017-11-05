import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'

import configureStore from './store'
import registerServiceWorker from './registerServiceWorker'

import App from './shared/App'
import './index.scss'

import { AppContainer } from 'react-hot-loader';

// Let the reducers handle initial state
const initialState = {}
const store = configureStore(initialState)

const render = Component => {
  ReactDOM.render(
    <AppContainer>
    <Provider store={store}>
      <BrowserRouter>
        <Component />
      </BrowserRouter>
    </Provider>
    </AppContainer>
  , document.getElementById('root')
  )
  
}



render(App)

if (module.hot) {
  module.hot.accept('./shared/App', () => { render(App) })
}

registerServiceWorker()
