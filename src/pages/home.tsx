import { Button } from '../components/button'
import { ComandaCard } from '../components/comanda-card'
import { useComandas } from '../hooks/comandas-hooks'
import { useModal } from '../hooks/modal-hooks'

export const Home = () => {
  const { openModal } = useModal()
  const { data: comandas } = useComandas()

  return (
    <div className='grid space-x-4 p-8'>
      <Button onClick={() => { openModal('create-comanda') }}>Abrir modal</Button>
      {comandas?.map(comanda => <ComandaCard key={comanda.id} {...comanda}/>)}
    </div>
  )
}
