import { type FC } from 'react'

export const Title: FC<React.DetailedHTMLProps<React.HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>> = (props) => {
  return <h1 className={`text-2xl font-bold ${props.className ?? ''}`}>{props.children}</h1>
}
