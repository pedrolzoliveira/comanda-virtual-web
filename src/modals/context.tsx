import { createContext, type ReactElement, useState } from 'react'
import { AddChargeModal, type AddChargeModalProps } from './add-charge-modal'
import { AddPaymentModal, type AddPaymentModalProps } from './add-payment-modal'
import { CreateComandaModal } from './create-comanda-modal'
import { EditComandaModal, type EditComandaModalProps } from './edit-comanda-modal'
import { AdjustComandaAmountModal, type AdjustComandaAmountModalProps } from './adjust-comanda-amount-modal'

export const MODAL_TYPES = {
  CREATE_COMANDA: 'create-comanda',
  EDIT_COMANDA: 'edit-comanda',
  ADJUST_COMANDA_AMOUNT: 'adjust-comanda-amount',
  ADD_CHARGE: 'add-charge',
  ADD_PAYMENT: 'add-payment'
} as const

type ModalDataRelation =
  [model: typeof MODAL_TYPES['CREATE_COMANDA']] |
  [model: typeof MODAL_TYPES['EDIT_COMANDA'], data: EditComandaModalProps] |
  [model: typeof MODAL_TYPES['ADJUST_COMANDA_AMOUNT'], data: AdjustComandaAmountModalProps] |
  [model: typeof MODAL_TYPES['ADD_CHARGE'], data: AddChargeModalProps] |
  [model: typeof MODAL_TYPES['ADD_PAYMENT'], data: AddPaymentModalProps]

interface ModalContextValues {
  openModal: (...params: ModalDataRelation) => void
  closeModal: () => void
}

export const ModalContext = createContext<ModalContextValues>({
  closeModal: () => {},
  openModal: () => {}
})

interface ShowModalProps {
  modalData: ModalDataRelation | null
}

const ShowModal = (props: ShowModalProps) => {
  if (!props.modalData) {
    return null
  }
  const [modal, data] = props.modalData

  switch (modal) {
    case 'create-comanda': {
      return <CreateComandaModal/>
    }
    case 'edit-comanda': {
      return <EditComandaModal {...data}/>
    }
    case 'adjust-comanda-amount': {
      return <AdjustComandaAmountModal {...data}/>
    }
    case 'add-charge': {
      return <AddChargeModal {...data}/>
    }
    case 'add-payment': {
      return <AddPaymentModal {...data}/>
    }
  }
}

interface ModalProviderProps {
  children: ReactElement
}

export const ModalProvider = (props: ModalProviderProps) => {
  const [modalData, setModalData] = useState<ModalDataRelation | null>(null)

  const openModal = (...params: ModalDataRelation) => {
    setModalData(params)
  }

  const closeModal = () => {
    setModalData(null)
  }

  return (
    <ModalContext.Provider value={{
      openModal,
      closeModal
    }}>
      <ShowModal modalData={modalData}/>
      {props.children}
    </ModalContext.Provider>
  )
}
