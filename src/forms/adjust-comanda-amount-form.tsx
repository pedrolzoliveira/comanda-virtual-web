import { useFormik } from 'formik'
import { Button } from '../components/button'
import { CurrencyInput } from '../components/currency-input'
import { Title } from '../components/title'
import { useAdjustAmount } from '../hooks/comandas-hooks'
import { useModal } from '../hooks/modal-hooks'
import { toast } from 'react-toastify'

interface AdjustComandaAmountFormProps {
  id: string
  amount: number
}

export const AdjustComandaAmountForm = ({ id, amount }: AdjustComandaAmountFormProps) => {
  const { mutateAsync: adjustAmount } = useAdjustAmount()
  const { closeModal } = useModal()
  const {
    handleSubmit,
    setFieldValue,
    values
  } = useFormik({
    initialValues: { amount },
    onSubmit: async (values) => {
      try {
        await adjustAmount({ id, amount: values.amount })
        closeModal()
      } catch (error) {
        if (error instanceof Error) {
          toast(error.message, { type: 'error' })
        }
      }
    }
  })

  return (
    <form onSubmit={handleSubmit}>
      <Title className='pb-6'>Ajustar valor</Title>
      <div className='flex flex-col'>
        <label htmlFor="amount">Valor</label>
        <CurrencyInput name='amount' value={values.amount} onChange={(cents) => { setFieldValue('amount', cents) }}/>
      </div>
      <div className='flex space-x-4 pt-4'>
        <Button className='w-full bg-red-500' onClick={closeModal}>Cancelar</Button>
        <Button className='w-full' type='submit'>Ajustar</Button>
      </div>
    </form>
  )
}
