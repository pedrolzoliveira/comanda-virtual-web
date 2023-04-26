import { useModal } from '../hooks/modal-hooks'
import { MODAL_TYPES } from '../modals/context'
import { type Comanda } from '../types/comanda'
import { formatCents } from '../formatter/currency'
import { Button } from './button'
import { AiOutlineMenu } from 'react-icons/ai'
import { useNavigate } from 'react-router-dom'

export const ComandaCard = (props: Comanda) => {
  const { openModal } = useModal()
  const navigate = useNavigate()

  const handleAddCharge = () => {
    openModal(MODAL_TYPES.ADD_CHARGE, { comandaId: props.id })
  }

  const handleAddPayment = () => {
    openModal(MODAL_TYPES.ADD_PAYMENT, { comandaId: props.id })
  }

  const handleOpenDetails = () => {
    navigate(`/comanda/${props.id}`)
  }

  return (
    <div className='flex w-72 flex-col items-center justify-center space-y-4 rounded border bg-white pt-6 pb-4'>
      <p className='text-ellipsis'>{props.name}</p>
      <div className='flex flex-col items-center'>
        <p className='text-2xl'>{formatCents(props.amount)}</p>
        <p className='text-sm text-gray-400'>a receber</p>
      </div>
      <div className='w-3/4 border'/>
      <div className='flex w-full justify-center space-x-4 px-4'>
        <Button className='w-full' onClick={handleAddCharge}>Cobrar</Button>
        <Button className='w-full' onClick={handleAddPayment}>Receber</Button>
      </div>
      <div className='flex w-full px-4'>
        <Button className='flex w-full items-center justify-between' onClick={handleOpenDetails}>
          <p>Ver detalhes</p>
          <AiOutlineMenu/>
        </Button>
      </div>
    </div>
  )
}
