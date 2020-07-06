import React from 'react'
import { Button } from '@material-ui/core'

export const ButtonPrimary: React.FCX = ({ children }: { children: React.ReactNode }) => (
  <Button variant='contained' color='primary'>
    {children}
  </Button>
)
