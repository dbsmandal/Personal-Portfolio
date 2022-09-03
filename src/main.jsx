import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { AppProvider } from './Context'
import './index.css'
import { Auth0Provider } from "@auth0/auth0-react";



ReactDOM.createRoot(document.getElementById('root')).render(
  <Auth0Provider
    domain="dev-0qwbfoxa.us.auth0.com"
    clientId="PCjcqmFXjYSFQJQkkDxknFPSf0vNZOkX"
    redirectUri={window.location.origin}>
  <AppProvider>
    <App />
  </AppProvider>
  </Auth0Provider>
)
