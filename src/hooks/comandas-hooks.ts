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
      query.invalidateQueries('comandas')
    }
  })
}

export const useAddPayment = () => {
  const query = useQueryClient()

  return useMutation({
    mutationFn: comandasService.addPayment,
    onSuccess: ({ comandaId }) => {
      query.invalidateQueries('comandas')
      query.invalidateQueries(`comanda-${comandaId}`)
    }
  })
}

export const useAddCharge = () => {
  const query = useQueryClient()

  return useMutation({
    mutationFn: comandasService.addCharge,
    onSuccess: ({ comandaId }) => {
      query.invalidateQueries('comandas')
      query.invalidateQueries(`comanda-${comandaId}`)
    }
  })
}
