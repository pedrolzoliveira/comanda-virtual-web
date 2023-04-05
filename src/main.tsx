import './index.css'
import 'react-toastify/dist/ReactToastify.css'
import 'yup-phone'

import React from 'react'
import ReactDOM from 'react-dom/client'
import { QueryClientProvider } from 'react-query'
import { ToastContainer } from 'react-toastify'

import App from './App'
import { queryClient } from './query-client'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <App/>
      <ToastContainer/>
    </QueryClientProvider>
  </React.StrictMode>
)
