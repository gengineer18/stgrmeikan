import React from 'react'
import { Header } from '@/components/Header'

const App: React.FCX = ({ children }: { children: React.ReactNode }) => (
  <main>
    <Header />
    {children}
  </main>
)

export default App
