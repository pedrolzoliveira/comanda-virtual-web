import { createContext, type ReactElement, useContext, useState } from 'react'
import { CreateComandaModal } from './create-comanda-modal'

export const MODAL_TYPES = {
  CREATE_COMANDA: 'create-comanda',
  ADD_CHARGE: 'add-charge'
} as const

type OpenModalParams = [typeof MODAL_TYPES['CREATE_COMANDA']] | [typeof MODAL_TYPES['ADD_CHARGE'], string]

interface ModalContextValues {
  openModal: (...params: OpenModalParams) => void
  closeModal: () => void
}

const ModalContext = createContext<ModalContextValues>({
  closeModal: () => {},
  openModal: () => {}
})

interface ModalProviderProps {
  children: ReactElement
}

const ShowModal = ({ modal }: { modal: OpenModalParams | null }) => {
  if (!modal) {
    return null
  }

  switch (modal[0]) {
    case 'create-comanda': {
      return <CreateComandaModal/>
    }
    default: {
      return null
    }
  }
}

export const ModalProvider = (props: ModalProviderProps) => {
  const [modal, setModal] = useState<OpenModalParams | null>(null)

  const openModal = (...params: OpenModalParams) => {
    setModal(params)
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
