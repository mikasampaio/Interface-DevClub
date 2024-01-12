import React from 'react'
import ReactDOM from 'react-dom/client'
import { ToastContainer } from 'react-toastify'

import AppProvider from './hooks'
import Navigate from './routes/routes'
import GlobalStyles from './styles/globalStyles'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <>
    <AppProvider>
      <Navigate />
    </AppProvider>
    <ToastContainer autoClose={1000} theme="colored" />
    <GlobalStyles />
  </>
)
