import { type ReactElement } from 'react'
import { Header } from './header'

interface LayoutProps {
  children: ReactElement
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Header/>
      <main>
        {children}
      </main>
    </>
  )
}
