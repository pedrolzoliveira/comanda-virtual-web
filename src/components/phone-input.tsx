import { type FC, useState } from 'react'
import { type NumberFormatValues, PatternFormat, type InputAttributes } from 'react-number-format'

type PhoneInputProps = {
  value: string
  onChange: (phone: string) => void
} & Omit<InputAttributes, 'format' | 'value' | 'onChange' | 'type'>

export const PhoneInput: FC<PhoneInputProps> = ({ value, onChange, className, ...props }) => {
  const [valueFormatted, setValueFormatted] = useState(value)

  const handleValueChange = ({ formattedValue, value }: NumberFormatValues) => {
    onChange(value)
    setValueFormatted(formattedValue)
  }

  return (
    <PatternFormat
      {...props}
      type='tel'
      value={valueFormatted}
      onValueChange={handleValueChange}
      placeholder='(99) 99999-9999'
      format='(##) #####-####'
      mask='_'
      className={`rounded border px-3 py-2 ${className ?? ''}`} />
  )
}
