import 'react'
import { Formik, Form, Field } from 'formik'
import { useCreateComanda } from '../hooks/comandas-hooks'

const initialValues = {
	name: '',
	cellPhone: ''
}

export const CreateComandaForm = () => {
	const { mutateAsync: create } = useCreateComanda()

	return (
		<Formik
			initialValues={initialValues}
			onSubmit={async values => {
				create(values)
			}}
		>
			<Form>
				<Field name="name"></Field>
				<Field name="cellPhone"></Field>
				<button type="submit">Criar</button>
			</Form>
		</Formik>
	)
}