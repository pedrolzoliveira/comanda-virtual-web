import { AddPaymentForm } from '../forms/add-payment-form'
import { Modal } from './modal'

export interface AddPaymentModalProps {
  comandaId: string
}

export const AddPaymentModal = ({ comandaId }: AddPaymentModalProps) => {
  return (
    <Modal>
      <AddPaymentForm comandaId={comandaId}/>
    </Modal>
  )
}
