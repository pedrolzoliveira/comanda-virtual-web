import { Transaction } from "./transaction"

export type Comanda = {
	id: string
	cellPhone: string
	name: string
	amount: number
	createdAt: string
}

export type ComandaWithTransactions = Comanda & { transactions: Transaction[] }
