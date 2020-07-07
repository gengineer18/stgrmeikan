import React from 'react'
import { IconButton } from '@material-ui/core'
import AddIcon from '@material-ui/icons/Add'
import { myStyled } from '@/types/themes'

const CircleButton = myStyled(IconButton)`
  border-radius: 50%;
  border: ${(props) => props.theme.palette.primary.main} 1px solid;
  background-color: ${(props) => props.theme.palette.primary.main};
  color: white;
  &:hover {
    border: ${(props) => props.theme.palette.primary.dark} 1px solid;
    background-color: ${(props) => props.theme.palette.primary.dark};
  }
`

export const ButtonCircleAddIcon: React.FCX = () => (
  <CircleButton color='primary' aria-label='add'>
    <AddIcon />
  </CircleButton>
)
