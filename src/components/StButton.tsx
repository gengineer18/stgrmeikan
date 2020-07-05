import React from 'react'
import Button from '@material-ui/core/Button'
import styled from '@emotion/styled'

const StyledButton = styled(Button)`
  background: linear-gradient(45deg, #fe6b8b 30%, #ff8e53 90%);
  border-radius: 3px;
  border: 0;
  color: white;
  height: 48px;
  padding: 0 30px;
  font-size: 0.875rem;
  box-shadow: 0 3px 5px 2px rgba(255, 105, 135, 0.3);
`

export const StButton: React.FCX = ({ children }) => (
  <StyledButton variant='contained' color='primary'>
    {children}
  </StyledButton>
)
