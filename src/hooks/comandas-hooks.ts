import { useMutation, useQuery, useQueryClient } from 'react-query'
import { comandasService } from '../services/comandas'

export const useComanda = (id: string, transaction = false) => {
  return useQuery(`comanda-${id}`, async () => await comandasService.getById(id, transaction))
}

export const useComandas = (transaction = false) => {
  return useQuery('comandas', async () => await comandasService.getAll(transaction))
}

export const useCreateComanda = () => {
  const query = useQueryClient()

  return useMutation({
    mutationFn: comandasService.create,
    onSuccess: () => {
      query.invalidateQueries(['comandas'])
    }
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
