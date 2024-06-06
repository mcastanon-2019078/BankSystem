import React from 'react'
import ReactDOM from 'react-dom/client'
import { Index } from './Index.jsx'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Index /> 
    <FontAwesomeIcon  />
  </React.StrictMode>,
)
