import { RouterProvider } from 'react-router-dom'
import { ModalProvider } from './modals/context'
import { router } from './router'

function App () {
  return (
    <ModalProvider>
      <RouterProvider router={router}/>
    </ModalProvider>
  )
}

export default App
