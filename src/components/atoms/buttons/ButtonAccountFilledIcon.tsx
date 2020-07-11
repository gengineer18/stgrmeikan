import React from 'react'
import { Button } from '@material-ui/core'
import EmojiEmotionsIcon from '@material-ui/icons/EmojiEmotions'
import { styledBNaviButton } from '@/styles/common'
import { blueGrey } from '@material-ui/core/colors'

export const ButtonAccountFilledIcon: React.FCX = () => (
  <Button aria-label='account' css={styledBNaviButton}>
    <EmojiEmotionsIcon style={{ color: blueGrey[50] }} />
  </Button>
)
