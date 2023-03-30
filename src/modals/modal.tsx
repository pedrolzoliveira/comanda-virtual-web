export interface ModalProps {
  onClose: () => void
  children?: React.ReactNode
  isOpen: boolean
}

export const Modal = ({ isOpen, onClose, children }: ModalProps) => {
  if (!isOpen) {
    return null
  }

  return (
      <div onClick={onClose} className="absolute inset-0 flex items-center justify-center bg-black/50">
        <div onClick={e => { e.stopPropagation() }} className="rounded bg-white p-8">
          {children}
        </div>
      </div>
  )
}
