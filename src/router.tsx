import { createBrowserRouter } from 'react-router-dom'
import { Home } from './pages/home'
import { Comanda } from './pages/comanda'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Home/>
  },
  {
    path: '/comanda/:id',
    element: <Comanda/>
  }
])
