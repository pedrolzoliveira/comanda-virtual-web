import { useModal } from '../hooks/modal-hooks'
import { MODAL_TYPES } from '../modals/context'
import { type Comanda } from '../types/comanda'
import { currencyFormatter } from '../formatter/currency'
import { Button } from './button'

export const ComandaCard = (props: Comanda) => {
  const { openModal } = useModal()

  const handleAddCharge = () => {
    openModal(MODAL_TYPES.ADD_CHARGE, { comandaId: props.id })
  }

  const handleAddPayment = () => {
    openModal(MODAL_TYPES.ADD_PAYMENT, { comandaId: props.id })
  }

  return (
    <div className='flex h-52 w-72 flex-col items-center justify-center space-y-4 rounded border bg-gray-100/20 pt-6 pb-4'>
      <p className='text-ellipsis'>{props.name}</p>
      <div className='flex flex-col items-center'>
        <p className='text-2xl'>{currencyFormatter.format(props.amount / 100)}</p>
        <p className='text-sm text-gray-400'>a receber</p>
      </div>
      <div className='flex w-full justify-center space-x-4 px-4'>
        <Button className='w-full' onClick={handleAddCharge}>Cobrar</Button>
        <Button className='w-full' onClick={handleAddPayment}>Receber</Button>
      </div>
    </div>
  )
}
