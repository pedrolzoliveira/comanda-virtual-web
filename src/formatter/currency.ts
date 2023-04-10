export const currencyFormatter = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' })

export const formatCents = (cents: number) => currencyFormatter.format(cents / 100)
