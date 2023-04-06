import { Field, Formik, Form, ErrorMessage } from 'formik'
import { toast } from 'react-toastify'
import * as Yup from 'yup'
import { Button } from '../components/button'
import { useAddCharge } from '../hooks/comandas-hooks'
import { useModal } from '../hooks/modal-hooks'

const addChargeSchema = Yup.object().shape({
  description: Yup.string(),
  value: Yup.number()
})

const initialValues = {
  description: '',
  value: 0
}

interface AddChargeFormProps {
  comandaId: string
}

export const AddChargeForm = ({ comandaId }: AddChargeFormProps) => {
  const { mutateAsync: addCharge } = useAddCharge()
  const { closeModal } = useModal()

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={addChargeSchema}
      onSubmit={async ({ description, value }) => {
        try {
          await addCharge({ comandaId, description, value })
          closeModal()
        } catch (error) {
          if (error instanceof Error) {
            toast(error.message, { type: 'error' })
          }
        }
      }}
    >
      <Form>
        <h1 className='pb-6 text-2xl font-bold'>Adicione uma cobrança</h1>
        <div className='flex flex-col'>
          <label htmlFor="description">Descrição</label>
          <Field className="rounded border px-3 py-2" name="description"></Field>
          <ErrorMessage name="description">
            {(error) => <p className='text-red-600'>{error}</p>}
          </ErrorMessage>
        </div>
        <div className='flex flex-col'>
          <label htmlFor="value">Valor</label>
          <Field type="number" className="rounded border px-3 py-2" name="value"></Field>
          <ErrorMessage name="value">
            {(error) => <p className='text-red-600'>{error}</p>}
          </ErrorMessage>
        </div>
        <div className='flex space-x-4 pt-4'>
          <Button className='w-full bg-red-500' onClick={closeModal}>Cancelar</Button>
          <Button className='w-full' type='submit'>Adicionar</Button>
        </div>
      </Form>
    </Formik>
  )
}
