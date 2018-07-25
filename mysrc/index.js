import React from 'react'

import App from './components/App.js'

import { BrowserRouter } from 'react-router-dom'
import { hydrate } from 'react-dom'

const data = window.__INITIAL_STATE__
window.React = React

hydrate(
  <BrowserRouter>
    <App projects={data}/>
  </BrowserRouter>,
  document.getElementById('react-container')
)