import { Formik } from 'formik'
import * as Yup from 'yup'
import { useAddCharge } from '../hooks/comandas-hooks'

interface AddChargeFormProps {
  comandaId: string
  onClose: () => void
}

const addChargeSchema = Yup.object().shape({
  description: Yup.string(),
  value: Yup.number()
})

const initialValues = {
  description: '',
  value: 0
}

export const AddChargeForm = ({ comandaId, onClose }: AddChargeFormProps) => {
  const { mutateAsync: addCharge } = useAddCharge()

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={addChargeSchema}
      onSubmit={async values => {
        try {
          await addCharge({ comandaId, ...values })
          onClose()
        } catch (error) {
        }
      }}
    >
      <h1></h1>
    </Formik>
  )
}
