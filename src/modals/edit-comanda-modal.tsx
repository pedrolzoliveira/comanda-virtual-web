import { EditComandaForm } from '../forms/edit-comanda-form'
import { Modal } from './modal'

export interface EditComandaModalProps {
  comandaId: string
  name: string
  cellphone: string
}

export const EditComandaModal = (props: EditComandaModalProps) => {
  return (
    <Modal>
      <EditComandaForm {...props}/>
    </Modal>
  )
}
