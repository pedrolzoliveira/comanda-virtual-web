import { useModal } from '../hooks/modal-hooks'
import { MODAL_TYPES } from '../modals/context'

export const Header = () => {
  const { openModal } = useModal()

  const handleCriarComanda = () => {
    openModal(MODAL_TYPES.CREATE_COMANDA)
  }

  return (
    <header className="bg-blue-500 py-2 px-3 text-white">
      <button onClick={handleCriarComanda}>
        Criar comanda
      </button>
    </header>
  )
}
