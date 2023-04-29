import { useEditComanda } from '../hooks/comandas-hooks'
import { Button } from '../components/button'
import { toast } from 'react-toastify'
import { useModal } from '../hooks/modal-hooks'
import { Input } from '../components/input'
import { useFormik } from 'formik'
import { Title } from '../components/title'
import { PhoneInput } from '../components/phone-input'
import { comandaSchema } from '../schemas/comandaSchemas'

interface EditComandaFormProps {
  comandaId: string
  name: string
  cellphone: string
}

export const EditComandaForm = ({ comandaId, name, cellphone }: EditComandaFormProps) => {
  const { mutateAsync: update } = useEditComanda()
  const { closeModal } = useModal()
  const {
    handleSubmit,
    handleChange,
    setFieldValue,
    values,
    errors,
    touched
  } = useFormik({
    initialValues: { name, cellphone },
    validationSchema: comandaSchema,
    onSubmit: async values => {
      try {
        await update({ id: comandaId, ...comandaSchema.cast(values) })
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
      <Title className='pb-6'>Editar comanda</Title>
      <div className='flex flex-col'>
        <label htmlFor="name">Nome</label>
        <Input autoComplete='off' name="name" value={values.name} onChange={handleChange}/>
        { errors.name && <p className='text-red-600'>{errors.name}</p>}
      </div>
      <div className='flex flex-col'>
        <label htmlFor="cellphone">Celular</label>
        <PhoneInput autoComplete='off' name="cellphone" value={values.cellphone} onChange={phone => { setFieldValue('cellphone', phone) }}/>
        { touched.cellphone && errors.cellphone && <p className='text-red-600'>{errors.cellphone}</p>}
      </div>
      <div className='flex space-x-4 pt-4'>
        <Button className='w-full bg-red-500' onClick={closeModal} type='button'>Cancelar</Button>
        <Button className='w-full' type='submit'>Salvar</Button>
      </div>
    </form>
  )
}
