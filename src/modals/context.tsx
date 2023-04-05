import { createContext, type ReactElement, useState } from 'react'
import { AddChargeModal, type AddChargeModalProps } from './add-charge-modal'
import { CreateComandaModal } from './create-comanda-modal'

export const MODAL_TYPES = {
  CREATE_COMANDA: 'create-comanda',
  ADD_CHARGE: 'add-charge'
} as const

type ModalDataRelation =
  [typeof MODAL_TYPES['CREATE_COMANDA']] |
  [typeof MODAL_TYPES['ADD_CHARGE'], AddChargeModalProps]

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
    case 'add-charge': {
      return <AddChargeModal {...data}/>
    }
    default: {
      return null
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
