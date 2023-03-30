import { Modal, type ModalProps } from './modal'
import { CreateComandaForm } from '../forms/create-comanda-form'

export const CreateComandaModal = (props: ModalProps) => {
  return (
    <Modal {...props}>
      <CreateComandaForm onClose={props.onClose}/>
    </Modal>
  )
}
