export type Transaction = {
	id: string
	comandaId: string
	description: string
	amount: number
	type: 'payment' | 'charge'
	createdAt: string
}
