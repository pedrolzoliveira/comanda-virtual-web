import { ComandaCard } from '../components/comanda-card'
import { useComandas } from '../hooks/comandas-hooks'

export const Home = () => {
  const { data: comandas } = useComandas()

  return (
    <div className='grid grid-cols-5 gap-4 p-4'>
      {comandas?.map(comanda => <ComandaCard key={comanda.id} {...comanda}/>)}
    </div>
  )
}
