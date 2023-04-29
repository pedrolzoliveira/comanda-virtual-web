/* eslint-disable react/display-name */
import { forwardRef, type InputHTMLAttributes } from 'react'

export const Input = forwardRef<HTMLInputElement, InputHTMLAttributes<HTMLInputElement>>(
  (props, ref) => {
    return <input {...props} ref={ref} className={`rounded border px-3 py-2 ${props.className ?? ''}`}/>
  }
)
