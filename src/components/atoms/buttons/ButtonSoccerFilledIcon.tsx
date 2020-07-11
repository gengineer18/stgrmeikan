import React from 'react'
import { Button } from '@material-ui/core'
import SportsSoccerTwoToneIcon from '@material-ui/icons/SportsSoccerTwoTone'
import { styledBNaviButton } from '@/styles/common'
import { blueGrey } from '@material-ui/core/colors'

export const ButtonSoccerFilledIcon: React.FCX = () => (
  <Button color='primary' aria-label='soccer' css={styledBNaviButton}>
    <SportsSoccerTwoToneIcon style={{ color: blueGrey[50] }} />
  </Button>
)
