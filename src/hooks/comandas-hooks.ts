import { useMutation, useQuery } from 'react-query'
import { comandasService } from '../services/comandas'

export const useComanda = (id: string, transaction = false) => {
  return useQuery(`comanda-${id}`, async () => await comandasService.get(id, transaction))
}

export const useCreateComanda = () => {
  return useMutation({
    mutationFn: comandasService.create
  })
}

export const useAddPayment = () => {
  return useMutation({
    mutationFn: comandasService.addPayment
  })
}

export const useAddCharge = () => {
  return useMutation({
    mutationFn: comandasService.addCharge
  })
}
