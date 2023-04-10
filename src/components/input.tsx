import { type FC } from 'react'

export const Input: FC<React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>> = props => <input {...props} className={`rounded border px-3 py-2 ${props.className ?? ''}`}></input>
