import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'
import Application from './Application'
import createStore from './redux'
import './index.css'

const store = createStore()

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Application />
    </Router>
  </Provider>,
  document.getElementById('app'),
)
