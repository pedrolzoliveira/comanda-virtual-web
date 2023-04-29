export interface Transaction {
  id: string
  comandaId: string
  description: string
  amount: number
  type: 'payment' | 'charge' | 'adjustment'
  createdAt: string
}
