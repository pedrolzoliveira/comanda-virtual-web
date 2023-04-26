import { formatCents } from '../formatter/currency'
import { useComanda } from '../hooks/comandas-hooks'
import { type ComandaWithTransactions } from '../types/comanda'
import { Input } from './input'
import { PhoneInput } from './phone-input'
import { Button } from './button'
import { useModal } from '../hooks/modal-hooks'

interface ComandaDetailsProps {
  id: string
}

const formatter = new Intl.DateTimeFormat('pt-BR')

const ComandaDetailsSkeleton = () => {
  return (
    <div className='animate-pulse space-y-2'>
      <div className='h-10 w-52 rounded bg-gray-300'></div>
      <div className='h-8 w-32 rounded bg-gray-300'></div>
    </div>
  )
}

export const ComandaDetails = (props: ComandaDetailsProps) => {
  const { data: comanda, isLoading } = useComanda(props.id, true)
  const { openModal } = useModal()

  if (isLoading || !comanda) {
    return <ComandaDetailsSkeleton/>
  }

  const handleReceber = () => {
    openModal('add-payment', { comandaId: props.id })
  }

  const handleCobrar = () => {
    openModal('add-charge', { comandaId: props.id })
  }

  return (
    <div className='flex flex-col space-y-4'>
      <div className='flex justify-evenly space-x-10'>
        <div className='flex flex-col space-y-3'>
          <div className='flex flex-col'>
            <label>Nome</label>
            <Input value={comanda.name}/>
          </div>
          <div className='flex flex-col'>
            <label>Celular</label>
            <PhoneInput value={comanda.cellphone} onChange={() => {}}/>
          </div>
        </div>
        <div className='flex flex-col items-center justify-center'>
          <p className='text-2xl'>{formatCents(comanda.amount)}</p>
          <p className='text-sm text-gray-400'>a receber</p>
          <div className='mt-4 flex w-full space-x-4'>
            <Button onClick={handleReceber} className='w-full'>Receber</Button>
            <Button onClick={handleCobrar} className='w-full'>Cobrar</Button>
          </div>
        </div>

      </div>
      <div className='overflow-x-auto rounded shadow'>
        <table className='w-full text-left text-sm text-gray-500 dark:text-gray-400'>
          <thead className='bg-gray-50 text-xs uppercase text-gray-700'>
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
                    <td className='px-6 py-4'>
                      { transaction.type === 'charge' ? 'Cobrança' : 'Pagamento' }
                    </td>
                    <td className='px-6 py-4'>{transaction.description}</td>
                    <td className='px-6 py-4'>{formatCents(transaction.amount)}</td>
                    <td className='px-6 py-4'>{formatter.format(new Date(transaction.createdAt))}</td>
                  </tr>
                )
              })
            }
          </tbody>
        </table>
      </div>
    </div>
  )
}
