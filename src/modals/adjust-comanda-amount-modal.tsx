import { AdjustComandaAmountForm } from '../forms/adjust-comanda-amount-form'
import { Modal } from './modal'

export interface AdjustComandaAmountModalProps {
  id: string
  amount: number
}

export const AdjustComandaAmountModal = (props: AdjustComandaAmountModalProps) => {
  return (
    <Modal>
      <AdjustComandaAmountForm {...props}/>
    </Modal>
  )
}
