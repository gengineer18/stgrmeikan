import React from 'react'
import { Button } from '@material-ui/core'
import AddAPhotoIcon from '@material-ui/icons/AddAPhoto'
import { styledBNaviButton } from '@/styles/common'
import { blueGrey } from '@material-ui/core/colors'

export const ButtonAddAPhotoFilledIcon: React.FCX = () => (
  <Button color='primary' aria-label='add' css={styledBNaviButton}>
    <AddAPhotoIcon style={{ color: blueGrey[50] }} />
  </Button>
)
