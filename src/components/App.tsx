import React from 'react';
import { Header } from './Header';

const App: React.FCX = ({ children }: { children: React.ReactNode }) => (
  <main>
    <Header />
    {children}
  </main>
);

export default App;
