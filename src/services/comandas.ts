import axios from 'axios'
import { Comanda, ComandaWithTransactions } from '../types/comanda'
import { Transaction } from '../types/transaction'

interface CreateComandaData {
	name: string
	cellPhone: string
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

export const comandasService = {
	get: async (id: string, includeTransactions = false) => {
		const url = new URL('http://localhost:3030/comandas')
		url.searchParams.append('id', id)
		url.searchParams.append('transactions', String(includeTransactions))
		const response = await axios.get<Comanda | ComandaWithTransactions>(url.toString())
		return response.data
	},
	create: async (data: CreateComandaData) => {
		const response = await axios.post<Comanda>('http://localhost:3030/comandas', data)
		return response.data
	},
	addPayment: async (data: AddPaymentData) => {
		const response = await axios.post<Transaction & { type: 'payment' }>('http://localhost:3000/comandas/payments', data)
		return response.data
	},
	addCharge: async (data: AddChargeData) => {
		const response = await axios.post<Transaction & { type: 'charge' }>('http://localhost:3000/comandas/charges', data)
		return response.data
	},
} as const
