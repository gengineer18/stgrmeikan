import React from 'react'
import { Button } from '@material-ui/core'
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined'
import { styledBNaviButton } from '@/styles/common'
import { blueGrey } from '@material-ui/core/colors'

export const ButtonHomeOutlinedIcon: React.FCX = () => (
  <Button color='default' aria-label='home' css={styledBNaviButton}>
    <HomeOutlinedIcon style={{ color: blueGrey[50] }} />
  </Button>
)
