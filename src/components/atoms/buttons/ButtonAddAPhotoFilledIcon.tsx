import React from 'react'
import { IconButton } from '@material-ui/core'
import AddAPhotoIcon from '@material-ui/icons/AddAPhoto'

export const ButtonAddAPhotoFilledIcon: React.FCX = () => (
  <IconButton color='primary' aria-label='add'>
    <AddAPhotoIcon />
  </IconButton>
)
