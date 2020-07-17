import React from 'react'
import { IconButton } from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'
import { blueGrey } from '@material-ui/core/colors'

export const ButtonMenuIcon: React.FCX = () => (
  <IconButton aria-label='menu'>
    <MenuIcon style={{ color: blueGrey[50] }} />
  </IconButton>
)
