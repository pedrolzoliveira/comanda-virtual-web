import { useParams } from 'react-router-dom'
import { ComandaDetails } from '../components/comanda-details'

export const Comanda = () => {
  const { id } = useParams<{ id: string }>()

  if (!id) {
    return <p>Nop</p>
  }

  return (
    <div className='flex w-full justify-center pt-8'>
      <ComandaDetails id={id}/>
    </div>
  )
}
