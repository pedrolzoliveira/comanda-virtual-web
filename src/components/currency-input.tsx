import { type FC } from 'react'
import { formatCents } from '../formatter/currency'

type CurrencyInputProps = {
  value: number
  onChange: (cents: number) => void
} & Omit<React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>, 'value' | 'onChange'>

export const CurrencyInput: FC<CurrencyInputProps> = props => {
  const valueFormatted = formatCents(props.value)

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const cents = Number(
      e.target.value.replace(/[\D]*/g, '')
    )

    props.onChange(cents)
  }

  return (
    <input
      {...props}
      value={valueFormatted}
      onChange={handleOnChange}
      className={`rounded border px-3 py-2 ${props.className ?? ''}`}
      />
  )
}
