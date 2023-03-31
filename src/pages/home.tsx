import { useState } from 'react'
import { Button } from '../components/button'
import { useComandas } from '../hooks/comandas-hooks'
import { CreateComandaModal } from '../modals/create-comanda-modal'

export const Home = () => {
  const { data: comandas } = useComandas()
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div>
      { comandas?.map(comanda => <p key={comanda.id}>{comanda.name}</p>) }
      <CreateComandaModal isOpen={isOpen} onClose={() => { setIsOpen(false) }}/>
      <Button onClick={() => { setIsOpen(true) }}>Abrir modal</Button>
    </div>
  )
}
