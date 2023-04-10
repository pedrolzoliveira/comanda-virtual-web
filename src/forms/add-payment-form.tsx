import { useFormik } from 'formik'
import { toast } from 'react-toastify'
import * as Yup from 'yup'
import { Button } from '../components/button'
import { useAddPayment } from '../hooks/comandas-hooks'
import { useModal } from '../hooks/modal-hooks'
import { Input } from '../components/input'
import { CurrencyInput } from '../components/currency-input'

const validationSchema = Yup.object().shape({
  description: Yup.string(),
  value: Yup.number()
})

const initialValues = {
  description: '',
  value: 0
}

interface AddPaymentFormProps {
  comandaId: string
}

export const AddPaymentForm = ({ comandaId }: AddPaymentFormProps) => {
  const { mutateAsync: addPayment } = useAddPayment()
  const { closeModal } = useModal()
  const {
    handleSubmit,
    handleChange,
    setFieldValue,
    values,
    errors
  } = useFormik({
    initialValues,
    validationSchema,
    onSubmit: async ({ description, value }) => {
      try {
        await addPayment({ comandaId, description, value })
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
      <h1 className='pb-6 text-2xl font-bold'>Adicione um pagamento</h1>
      <div className='flex flex-col'>
        <label htmlFor="description">Descrição</label>
        <Input name="description" value={values.description} onChange={handleChange}/>
        { errors.description && <p className='text-red-600'>{errors.description}</p> }
      </div>
      <div className='flex flex-col'>
        <label htmlFor="value">Valor</label>
        <CurrencyInput name="value" value={values.value} onChange={cents => { setFieldValue('value', cents) }}/>
        { errors.value && <p className='text-red-600'>{errors.value}</p> }
      </div>
      <div className='flex space-x-4 pt-4'>
        <Button className='w-full bg-red-500' onClick={closeModal}>Cancelar</Button>
        <Button className='w-full' type='submit'>Adicionar</Button>
      </div>
    </form>
  )
}