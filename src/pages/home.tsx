import { useEffect, useState } from 'react'
import { Button } from '../components/button'
import { ComandaCard } from '../components/comanda-card'
import { PhoneInput } from '../components/phone-input'
import { useComandas } from '../hooks/comandas-hooks'
import { useModal } from '../hooks/modal-hooks'
import { MODAL_TYPES } from '../modals/context'

export const Home = () => {
  const { openModal } = useModal()
  const { data: comandas } = useComandas()

  const handleCreateComanda = () => {
    openModal(MODAL_TYPES.CREATE_COMANDA)
  }

  const [phone, setPhone] = useState('')

  useEffect(() => {
    console.log(phone)
  }, [phone])

  return (
    <div className='grid space-x-4 p-8'>
      <PhoneInput value={phone} onChange={value => { setPhone(value) }}/>

      <Button onClick={handleCreateComanda}>Criar comanda</Button>
      <div className='grid grid-rows-4'>
        {comandas?.map(comanda => <ComandaCard key={comanda.id} {...comanda}/>)}
      </div>
    </div>
  )
}
