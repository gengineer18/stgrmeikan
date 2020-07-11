import React from 'react'
import { Button } from '@material-ui/core'
import EmojiEmotionsOutlinedIcon from '@material-ui/icons/EmojiEmotionsOutlined'
import { styledBNaviButton } from '@/styles/common'
import { blueGrey } from '@material-ui/core/colors'

export const ButtonAccountOutlinedIcon: React.FCX = () => (
  <Button color='default' aria-label='account' css={styledBNaviButton}>
    <EmojiEmotionsOutlinedIcon style={{ color: blueGrey[50] }} />
  </Button>
)
