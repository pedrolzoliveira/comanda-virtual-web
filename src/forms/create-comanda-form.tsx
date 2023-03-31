import 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import { useCreateComanda } from '../hooks/comandas-hooks'
import { Button } from '../components/button'
import * as Yup from 'yup'
import { toast } from 'react-toastify'

interface CreateComandaFormProps {
  onClose: () => void
}

const createComandaSchema = Yup.object().shape({
  name: Yup.string().required('Nome é um campo obrigatório'),
  cellPhone: Yup.string().required('Celular é um campo obrigatório')
})

const initialValues = {
  name: '',
  cellPhone: ''
}
export const CreateComandaForm = (props: CreateComandaFormProps) => {
  const { mutateAsync: create } = useCreateComanda()

  return (
    <Formik
    initialValues={initialValues}
    validationSchema={createComandaSchema}
    onSubmit={async values => {
      try {
        await create(values)
        props.onClose()
      } catch (error) {
        if (error instanceof Error) {
          toast(error.message, { type: 'error' })
        }
      }
    }}>
        <Form className='flex w-96 flex-col space-y-3'>
          <h1 className='pb-6 text-2xl font-bold'>Crie uma comanda</h1>
          <div className='flex flex-col'>
            <label htmlFor="name">Nome</label>
            <Field className="rounded border px-3 py-2" name="name"></Field>
            <ErrorMessage name="name">
              {(error) => <p className='text-red-600'>{error}</p>}
            </ErrorMessage>
          </div>
          <div className='flex flex-col'>
            <label htmlFor="cellPhone">Celular</label>
            <Field className="rounded border px-3 py-2" name="cellPhone"></Field>
            <ErrorMessage name="cellPhone">
              {(error) => <p className='text-red-600'>{error}</p>}
            </ErrorMessage>
          </div>
          <div className='flex space-x-4 pt-4'>
            <Button className='w-full bg-red-500' onClick={props.onClose} type='button'>Cancelar</Button>
            <Button className='w-full' type='submit'>Criar</Button>
          </div>
        </Form>
    </Formik>
  )
}
