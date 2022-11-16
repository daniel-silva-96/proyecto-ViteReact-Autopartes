import React from 'react'
import ReactDOM from 'react-dom/client'
import { Routes } from 'react-router-dom'

import './index.css'
import Router from './Router/Router'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router/>
  </React.StrictMode>
)
