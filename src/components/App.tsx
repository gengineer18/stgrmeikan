import React from 'react'
import { BNavigation } from '@/components/organisms/navigation/BNavigation'

const App: React.FCX = ({ children }: { children: React.ReactNode }) => (
  <>
    <main>{children}</main>
    <BNavigation />
  </>
)

export default App
