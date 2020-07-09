import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import BottomNavigation from '@material-ui/core/BottomNavigation'
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction'

// icons
import HomeIcon from '@material-ui/icons/Home'
import AddAPhotoIcon from '@material-ui/icons/AddAPhoto'
import SportsSoccerIcon from '@material-ui/icons/SportsSoccer'
import EmojiEmotionsIcon from '@material-ui/icons/EmojiEmotions'

import { colorPrimaryMain, colorSecondaryMain } from '@/styles/variable'

const useStyles = makeStyles({
  bottomNavStyle: {
    position: `fixed`,
    left: `0px`,
    bottom: `0px`,
    height: `50px`,
    width: `100%`,
    zIndex: 100,
    padding: `12px 0`,
    backgroundColor: `${colorPrimaryMain}`,
  },
  actionItemStyles: {
    color: `white`,
    '&$selected': {
      color: `${colorSecondaryMain}`,
    },
  },
  selected: {},
})

export function BNavigation(): JSX.Element {
  const classes = useStyles()
  const [value, setValue] = React.useState(`home`)

  const handleChange = (event: React.ChangeEvent<unknown>, newValue: string) => {
    setValue(newValue)
  }

  return (
    <BottomNavigation value={value} onChange={handleChange} className={classes.bottomNavStyle}>
      <BottomNavigationAction
        label='Home'
        value='home'
        icon={<HomeIcon />}
        classes={{
          root: classes.actionItemStyles,
          selected: classes.selected,
        }}
      />
      <BottomNavigationAction
        label='Add'
        value='add'
        icon={<AddAPhotoIcon />}
        classes={{
          root: classes.actionItemStyles,
          selected: classes.selected,
        }}
      />
      <BottomNavigationAction
        label='Clubs'
        value='clubs'
        icon={<SportsSoccerIcon />}
        classes={{
          root: classes.actionItemStyles,
          selected: classes.selected,
        }}
      />
      <BottomNavigationAction
        label='Account'
        value='account'
        icon={<EmojiEmotionsIcon />}
        classes={{
          root: classes.actionItemStyles,
          selected: classes.selected,
        }}
      />
    </BottomNavigation>
  )
}
