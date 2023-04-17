import { type DetailedHTMLProps, type InputHTMLAttributes, type FC, type ChangeEvent } from 'react'
import { formatCents } from '../formatter/currency'
import { NOT_DIGIT_REGEX } from '../regex'

type CurrencyInputProps = {
  value: number
  onChange: (cents: number) => void
} & Omit<DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>, 'value' | 'onChange'>

export const CurrencyInput: FC<CurrencyInputProps> = props => {
  const valueFormatted = formatCents(props.value)

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    const cents = Number(
      e.target.value.replace(NOT_DIGIT_REGEX, '')
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
