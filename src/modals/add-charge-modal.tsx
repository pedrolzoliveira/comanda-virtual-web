import { AddChargeForm } from '../forms/add-charge-form'
import { Modal, type ModalProps } from './modal'

export const AddChargeModal = (props: ModalProps) => {
  return (
    <Modal {...props}>
      <AddChargeForm comandaId='' onClose={props.onClose}/>
    </Modal>
  )
}
