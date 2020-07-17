import React from 'react'
import { IconButton } from '@material-ui/core'
import MeetingRoomIcon from '@material-ui/icons/MeetingRoom'
import { blueGrey } from '@material-ui/core/colors'

export const ButtonLoginIcon: React.FCX = () => (
  <IconButton aria-label='menu'>
    <MeetingRoomIcon style={{ color: blueGrey[50] }} />
  </IconButton>
)
