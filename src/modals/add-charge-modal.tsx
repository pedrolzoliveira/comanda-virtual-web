import { AddChargeForm } from '../forms/add-charge-form'
import { Modal } from './modal'

export interface AddChargeModalProps {
  comandaId: string
}

export const AddChargeModal = ({ comandaId }: AddChargeModalProps) => {
  return (
    <Modal>
      <AddChargeForm comandaId={comandaId}/>
    </Modal>
  )
}
