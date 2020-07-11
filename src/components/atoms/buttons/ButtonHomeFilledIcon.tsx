import React from 'react'
import { Button } from '@material-ui/core'
import HomeIcon from '@material-ui/icons/Home'
import { styledBNaviButton } from '@/styles/common'
import { blueGrey } from '@material-ui/core/colors'

export const ButtonHomeFilledIcon: React.FCX = () => (
  <Button color='primary' aria-label='home' css={styledBNaviButton}>
    <HomeIcon style={{ color: blueGrey[50] }} />
  </Button>
)
