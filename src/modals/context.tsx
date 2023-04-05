import { createContext, type ReactElement, useContext, useState } from 'react'
import { ShowModal } from './show-modal'

export type ModalTypes = 'create-comanda' | 'add-charge' | null

interface ModalContextValues {
  openModal: (modal: Exclude<ModalTypes, null>) => void
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
  const [modal, setModal] = useState<ModalTypes>(null)

  const openModal = (modal: Exclude<ModalTypes, null>) => {
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
