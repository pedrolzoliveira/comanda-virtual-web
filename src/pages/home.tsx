import { useState } from 'react'
import { Button } from '../components/button'
import { CreateComandaModal } from '../modals/create-comanda-modal'

export const Home = () => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <div>
      <CreateComandaModal isOpen={isOpen} onClose={() => { setIsOpen(false) }}/>
      <Button onClick={() => { setIsOpen(true) }}>Abrir modal</Button>
    </div>
  )
}
