import React, { useState } from 'react'
import Link from '@/components/atom/Link'
import { Avatar, ListItemAvatar, List, ListItem, ListItemText, Collapse } from '@material-ui/core'
import ExpandMore from '@material-ui/icons/ExpandMore'
import ChevronRightIcon from '@material-ui/icons/ChevronRight'

import { Area } from '@/types/json'

type IProps = {
  data: Area
}

export const ClubList: React.FCX<IProps> = ({ data }) => {
  const [open, setOpen] = useState(false)
  const handleOpen = () => {
    setOpen(!open)
  }
  return (
    <>
      <List component='nav'>
        <ListItem button onClick={handleOpen}>
          {open ? <ExpandMore /> : <ChevronRightIcon />}
          <ListItemText primary={data.areaJp} />
        </ListItem>
        <Collapse in={open} timeout='auto' unmountOnExit>
          {data.list.map((item) => (
            <List component='div' disablePadding key={item.id}>
              <Link href='/clubs/[clubid]' as={`/clubs/${item.clubId}`}>
                <ListItem button>
                  <ListItemAvatar>
                    <Avatar variant='rounded' src={`/static/images/clubs/${item.clubId}.png`} alt={`${item.clubId}`} />
                  </ListItemAvatar>
                  <ListItemText primary={`${item.name}`} />
                </ListItem>
              </Link>
            </List>
          ))}
        </Collapse>
      </List>
    </>
  )
}
