import { RouterProvider } from 'react-router-dom'
import { ModalProvider } from './modals/context'
import { router } from './router'
import { Layout } from './layout'

function App () {
  return (
    <ModalProvider>
      <Layout>
        <RouterProvider router={router}/>
      </Layout>
    </ModalProvider>
  )
}

export default App
