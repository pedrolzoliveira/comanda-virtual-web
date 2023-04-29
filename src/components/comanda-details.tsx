import { useRef } from 'react'
import { AiOutlineEdit } from 'react-icons/ai'
import { Input } from './input'
import { PhoneInput } from './phone-input'
import { Button } from './button'
import { formatCents } from '../formatter/currency'
import { useComanda } from '../hooks/comandas-hooks'
import { type ComandaWithTransactions } from '../types/comanda'
import { useModal } from '../hooks/modal-hooks'
interface ComandaDetailsProps {
  id: string
}

const ComandaDetailsSkeleton = () => {
  return (
    <div className='animate-pulse space-y-2'>
      <div className='h-10 w-52 rounded bg-gray-300'></div>
      <div className='h-8 w-32 rounded bg-gray-300'></div>
    </div>
  )
}

const TRANSACTIONS_LABEL = {
  charge: 'Cobrança',
  payment: 'Pagamento',
  adjustment: 'Ajuste'
} as const

export const ComandaDetails = (props: ComandaDetailsProps) => {
  const { data: comanda, isLoading } = useComanda(props.id, true)
  const { openModal } = useModal()

  const inputRef = useRef<HTMLInputElement>(null)

  if (isLoading || !comanda) {
    return <ComandaDetailsSkeleton/>
  }

  const handleAddPayment = () => {
    openModal('add-payment', { comandaId: props.id })
  }

  const handleAddCharge = () => {
    openModal('add-charge', { comandaId: props.id })
  }

  const handleEdit = () => {
    openModal('edit-comanda', { comandaId: comanda.id, name: comanda.name, cellphone: comanda.cellphone })
  }

  return (
    <div className='flex h-full w-2/3 flex-col space-y-4'>
      <div className='w-full'>
        <Button onClick={handleEdit}><AiOutlineEdit/></Button>
      </div>
      <div className='flex justify-between space-x-10 pb-6'>
        <div className='flex w-1/3 flex-col justify-end space-y-3'>
          <div className='flex flex-col'>
            <label>Nome</label>
            <Input readOnly value={comanda.name} />
          </div>
          <div className='flex flex-col'>
            <label>Celular</label>
            <PhoneInput readOnly ref={inputRef} value={comanda.cellphone}/>
          </div>
        </div>
        <div className='flex w-1/3 flex-col items-center justify-center'>
          <p className='text-3xl'>{formatCents(comanda.amount)}</p>
          <p className='text-sm text-gray-400'>a receber</p>
        </div>
        <div className='flex w-1/3 flex-col justify-center'>
          <div className='my-4 flex w-full space-x-4'>
            <Button onClick={handleAddPayment} className='w-full'>Receber</Button>
            <Button onClick={handleAddCharge} className='w-full'>Cobrar</Button>
          </div>
          <div className=' w-full'>
            <Button className='w-full'>Ajustar</Button>
          </div>
        </div>
      </div>
      <div className='h-2/3 max-h-[600px] overflow-y-scroll rounded shadow'>
        <table className='w-full text-left text-sm text-gray-500 dark:text-gray-400'>
          <thead className='sticky top-0 z-0 bg-gray-50 text-xs uppercase text-gray-700'>
            <tr>
              <th className='px-6 py-3'>Tipo</th>
              <th className='px-6 py-3'>Descrição</th>
              <th className='px-6 py-3'>Valor</th>
              <th className='px-6 py-3'>Data</th>
            </tr>
          </thead>
          <tbody>
            {
              (comanda as ComandaWithTransactions).transactions.map(transaction => {
                return (
                  <tr key={transaction.id} className='border-b bg-white'>
                    <td className='px-6 py-4'>{TRANSACTIONS_LABEL[transaction.type]}</td>
                    <td className='px-6 py-4'>{transaction.description}</td>
                    <td className='px-6 py-4'>{formatCents(transaction.amount)}</td>
                    <td className='px-6 py-4'>{new Date(transaction.createdAt).toLocaleString()}</td>
                  </tr>
                )
              })
            }
          </tbody>
        </table>
      </div>
      <p className='text-sm text-gray-400'>Comanda criada em {new Date(comanda.createdAt).toLocaleString()}</p>
    </div>
  )
}
