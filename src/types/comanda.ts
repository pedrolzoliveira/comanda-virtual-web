import { type Transaction } from './transaction'

export interface Comanda {
  id: string
  cellPhone: string
  name: string
  amount: number
  createdAt: string
}

export type ComandaWithTransactions = Comanda & { transactions: Transaction[] }
