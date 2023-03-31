import { useState } from 'react'
import { Button } from '../components/button'
import { ComandaCard } from '../components/comanda-card'
import { useComandas } from '../hooks/comandas-hooks'
import { CreateComandaModal } from '../modals/create-comanda-modal'

export const Home = () => {
  const { data: comandas } = useComandas()
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className='flex space-x-4 p-8'>
      { comandas?.map(comanda => <ComandaCard key={comanda.id} {...comanda}/>) }
      <CreateComandaModal isOpen={isOpen} onClose={() => { setIsOpen(false) }}/>
      <Button onClick={() => { setIsOpen(true) }}>Abrir modal</Button>
    </div>
  )
}
