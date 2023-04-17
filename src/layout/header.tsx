import { useModal } from '../hooks/modal-hooks'
import { MODAL_TYPES } from '../modals/context'

export const Header = () => {
  const { openModal } = useModal()

  const handleCriarComanda = () => {
    openModal(MODAL_TYPES.CREATE_COMANDA)
  }

  return (
    <header className="bg-blue-500 p-2 text-white">
      <button onClick={handleCriarComanda}>
        Criar comanda
      </button>
    </header>
  )
}
