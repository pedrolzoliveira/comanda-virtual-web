import { useContext } from 'react'
import { ModalContext } from '../modals/context'

export const useModal = () => {
  return useContext(ModalContext)
}
