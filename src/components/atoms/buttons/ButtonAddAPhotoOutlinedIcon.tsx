import React from 'react'
import { Button } from '@material-ui/core'
import AddAPhotoOutlinedIcon from '@material-ui/icons/AddAPhotoOutlined'
import { styledBNaviButton } from '@/styles/common'
import { blueGrey } from '@material-ui/core/colors'

export const ButtonAddAPhotoOutlinedIcon: React.FCX = () => (
  <Button color='default' aria-label='add' css={styledBNaviButton}>
    <AddAPhotoOutlinedIcon style={{ color: blueGrey[50] }} />
  </Button>
)
