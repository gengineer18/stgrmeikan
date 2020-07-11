import React from 'react'
import { Button } from '@material-ui/core'
import SportsSoccerIcon from '@material-ui/icons/SportsSoccer'
import { styledBNaviButton } from '@/styles/common'
import { blueGrey } from '@material-ui/core/colors'

export const ButtonSoccerOutlinedIcon: React.FCX = () => (
  <Button color='default' aria-label='soccer' css={styledBNaviButton}>
    <SportsSoccerIcon style={{ color: blueGrey[50] }} />
  </Button>
)
