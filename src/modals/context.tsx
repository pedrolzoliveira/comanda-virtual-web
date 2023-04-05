import { createContext, type ReactElement, useContext, useState } from 'react'
import { ShowModal } from './show-modal'

export const MODAL_TYPES = {
  CREATE_COMANDA: 'create-comanda',
  ADD_CHARGE: 'add-charge'
} as const

interface ModalContextValues {
  openModal: (modal: typeof MODAL_TYPES[keyof typeof MODAL_TYPES]) => void
  closeModal: () => void
}

const ModalContext = createContext<ModalContextValues>({
  closeModal: () => {},
  openModal: () => {}
})

interface ModalProviderProps {
  children: ReactElement
}

export const ModalProvider = (props: ModalProviderProps) => {
  const [modal, setModal] = useState<typeof MODAL_TYPES[keyof typeof MODAL_TYPES] | null>(null)

  const openModal = (modal: typeof MODAL_TYPES[keyof typeof MODAL_TYPES]) => {
    setModal(modal)
  }

  const closeModal = () => {
    setModal(null)
  }

  return (
    <ModalContext.Provider value={{
      closeModal,
      openModal
    }}>
      <ShowModal modal={modal}/>
      {props.children}
    </ModalContext.Provider>
  )
}

export const useModal = () => {
  return useContext(ModalContext)
}
