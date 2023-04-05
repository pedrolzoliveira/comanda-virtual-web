import { AddChargeForm } from '../forms/add-charge-form'
import { Modal } from './modal'

export interface AddChargeModalProps {
  comandaId: string
}

export const AddChargeModal = (props: AddChargeModalProps) => {
  return (
    <Modal>
      <AddChargeForm comandaId={props.comandaId}/>
    </Modal>
  )
}
