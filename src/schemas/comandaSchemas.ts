import * as Yup from 'yup'

export const comandaSchema = Yup.object().shape({
  name: Yup.string().trim().required('Nome é um campo obrigatório'),
  cellphone: Yup.string().min(11, 'Adicione um celular válido').required('Celular é um campo obrigatório')
})
