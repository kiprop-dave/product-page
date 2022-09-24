import React from 'react'
import ReactDOM from 'react-dom/client'
import { ContextProvider } from './context/context'
import App from './App'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ContextProvider>
      <App />
    </ContextProvider>
  </React.StrictMode>
)
