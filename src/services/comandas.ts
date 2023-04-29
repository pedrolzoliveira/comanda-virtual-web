import axios, { AxiosError } from 'axios'
import { type Comanda, type ComandaWithTransactions } from '../types/comanda'
import { type Transaction } from '../types/transaction'

interface CreateComandaData {
  name: string
  cellphone: string
}

interface AddPaymentData {
  comandaId: string
  description: string
  value: number
}

interface AddChargeData {
  comandaId: string
  description: string
  value: number
}

interface AddAdjustmentData {
  comandaId: string
  value: number
}

export const comandasService = {
  getById: async (id: string, includeTransactions = false) => {
    const url = new URL('http://localhost:3030/comandas')
    url.searchParams.append('id', id)
    url.searchParams.append('transactions', String(includeTransactions))

    const response = await axios.get<Comanda | ComandaWithTransactions>(url.toString())
    return response.data
  },
  getAll: async (includeTransactions = false) => {
    const url = new URL('http://localhost:3030/comandas')
    url.searchParams.append('transactions', String(includeTransactions))

    const response = await axios.get<Comanda[] | ComandaWithTransactions[]>(url.toString())
    return response.data
  },
  create: async (data: CreateComandaData) => {
    try {
      const response = await axios.post<Comanda>('http://localhost:3030/comandas', data)
      return response.data
    } catch (error) {
      if (error instanceof AxiosError && error.response?.status === 409) {
        throw new Error('Celular já cadastrado')
      }

      throw error
    }
  },
  addPayment: async (data: AddPaymentData) => {
    const response = await axios.post<Transaction & { type: 'payment' }>('http://localhost:3030/comandas/payments', data)
    return response.data
  },
  addCharge: async (data: AddChargeData) => {
    const response = await axios.post<Transaction & { type: 'charge' }>('http://localhost:3030/comandas/charges', data)
    return response.data
  },
  addAdjustment: async (data: AddAdjustmentData) => {
    const response = await axios.post<Transaction & { type: 'adjustment' }>('http://localhost:3030/comandas/adjustments', data)
    return response.data
  }
} as const
