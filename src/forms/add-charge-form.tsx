import { Formik } from 'formik'
import * as Yup from 'yup'
import { useAddCharge } from '../hooks/comandas-hooks'
import { useModal } from '../hooks/modal-hooks'

interface AddChargeFormProps {
  comandaId: string
}

const addChargeSchema = Yup.object().shape({
  description: Yup.string(),
  value: Yup.number()
})

const initialValues = {
  description: '',
  value: 0
}

export const AddChargeForm = ({ comandaId }: AddChargeFormProps) => {
  const { mutateAsync: addCharge } = useAddCharge()
  const { closeModal } = useModal()

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={addChargeSchema}
      onSubmit={async values => {
        try {
          await addCharge({ comandaId, ...values })
          closeModal()
        } catch (error) {
        }
      }}
    >
      <h1></h1>
    </Formik>
  )
}
