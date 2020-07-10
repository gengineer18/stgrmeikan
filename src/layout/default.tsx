import React from 'react'
import App from '@/components/App'
import { BNavigation } from '@/components/organisms/navigation/BNavigation'

export default function DefaultLayout({ children }: { children: React.ReactNode }): JSX.Element {
  return (
    <App>
      <main>{children}</main>
      <BNavigation />
    </App>
  )
}
