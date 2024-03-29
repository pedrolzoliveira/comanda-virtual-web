import { useModal } from '../hooks/modal-hooks'

export interface ModalProps {
  children?: React.ReactNode
}

export const Modal = ({ children }: ModalProps) => {
  const { closeModal } = useModal()

  return (
      <div onClick={closeModal} className="absolute inset-0 z-50 flex items-center justify-center bg-black/50">
        <div onClick={e => { e.stopPropagation() }} className="rounded bg-white p-8">
          {children}
        </div>
      </div>
  )
}
