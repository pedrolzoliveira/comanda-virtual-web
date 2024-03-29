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

export const useAddAdjustment = () => {
  const query = useQueryClient()

  return useMutation({
    mutationFn: comandasService.addAdjustment,
    onSuccess: ({ comandaId }) => {
      query.invalidateQueries('comandas')
      query.invalidateQueries(`comanda-${comandaId}`)
    }
  })
}

export const useEditComanda = () => {
  const query = useQueryClient()

  return useMutation({
    mutationFn: comandasService.update,
    onSuccess: ({ id }) => {
      query.invalidateQueries('comandas')
      query.invalidateQueries(`comanda-${id}`)
    }
  })
}

export const useAdjustAmount = () => {
  const query = useQueryClient()

  return useMutation({
    mutationFn: comandasService.adjustAmount,
    onSuccess: ({ id }) => {
      query.invalidateQueries('comandas')
      query.invalidateQueries(`comanda-${id}`)
    }
  })
}
