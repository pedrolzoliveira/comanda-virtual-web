import { useState } from 'react'
import { Button } from '../components/button'
import { ComandaCard } from '../components/comanda-card'
import { useComandas } from '../hooks/comandas-hooks'
import { AddChargeModal } from '../modals/add-charge-modal'
import { CreateComandaModal } from '../modals/create-comanda-modal'

export const Home = () => {
  const { data: comandas } = useComandas()
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className='grid space-x-4 p-8'>
      <AddChargeModal isOpen={true} onClose={() => {}}/>
      <CreateComandaModal isOpen={isOpen} onClose={() => { setIsOpen(false) }}/>
      <Button onClick={() => { setIsOpen(true) }}>Abrir modal</Button>
    </div>
  )
}
