import { type ModalTypes } from './context'
import { CreateComandaModal } from './create-comanda-modal'

export const ShowModal = (props: { modal: ModalTypes }) => {
  switch (props.modal) {
    case 'create-comanda': {
      return <CreateComandaModal/>
    }
    default: {
      return null
    }
  }
}
