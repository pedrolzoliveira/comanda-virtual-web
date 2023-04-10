import { useCreateComanda } from '../hooks/comandas-hooks'
import { Button } from '../components/button'
import * as Yup from 'yup'
import { toast } from 'react-toastify'
import { useModal } from '../hooks/modal-hooks'
import { Input } from '../components/input'
import { useFormik } from 'formik'

const validationSchema = Yup.object().shape({
  name: Yup.string().required('Nome é um campo obrigatório'),
  cellPhone: Yup.string().required('Celular é um campo obrigatório')
})

const initialValues = {
  name: '',
  cellPhone: ''
}

export const CreateComandaForm = () => {
  const { mutateAsync: create } = useCreateComanda()
  const { closeModal } = useModal()
  const {
    handleSubmit,
    handleChange,
    values,
    errors
  } = useFormik({
    initialValues,
    validationSchema,
    onSubmit: async values => {
      try {
        await create(values)
        closeModal()
      } catch (error) {
        if (error instanceof Error) {
          toast(error.message, { type: 'error' })
        }
      }
    }
  })

  return (
    <form onSubmit={handleSubmit} className='flex w-96 flex-col space-y-3'>
      <h1 className='pb-6 text-2xl font-bold'>Crie uma comanda</h1>
      <div className='flex flex-col'>
        <label htmlFor="name">Nome</label>
        <Input name="name" value={values.name} onChange={handleChange}/>
        { errors.name && <p className='text-red-600'>{errors.name}</p>}
      </div>
      <div className='flex flex-col'>
        <label htmlFor="cellPhone">Celular</label>
        <Input name="cellPhone" value={values.cellPhone} onChange={handleChange}/>
        { errors.cellPhone && <p className='text-red-600'>{errors.cellPhone}</p>}
      </div>
      <div className='flex space-x-4 pt-4'>
        <Button className='w-full bg-red-500' onClick={closeModal} type='button'>Cancelar</Button>
        <Button className='w-full' type='submit'>Criar</Button>
      </div>
    </form>
  )
}
