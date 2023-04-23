import { ComandaCard } from '../components/comanda-card'
import { useComandas } from '../hooks/comandas-hooks'

export const Home = () => {
  const { data: comandas } = useComandas()

  return (
    <div className='grid-cols-fill-72 grid justify-center gap-4 py-8 px-4'>
      {comandas?.map(comanda => <ComandaCard key={comanda.id} {...comanda}/>)}
    </div>
  )
}
