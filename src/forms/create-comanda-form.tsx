import 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import { useCreateComanda } from '../hooks/comandas-hooks'
import { Button } from '../components/button'
import Yup from 'yup'

const createComandaSchema = Yup.object().shape({
  name: Yup.string().required('Nome é um campo obrigatório'),
  cellPhone: Yup.string().required('Celular é um campo obrigatório')
})

const initialValues = {
  name: '',
  cellPhone: ''
}

export const CreateComandaForm = () => {
  const { mutateAsync: create, isLoading } = useCreateComanda()

  return (
    <Formik
    initialValues={initialValues}
    validationSchema={createComandaSchema}
    onSubmit={async values => {
      create(values)
    }}>
        <Form className='flex w-96 flex-col space-y-3'>
          <h1 className='text-2xl font-bold'>Crie uma comanda</h1>
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
          <Button loading={isLoading} type='submit'>Criar</Button>
        </Form>
    </Formik>
  )
}
