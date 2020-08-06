import React from 'react'
import { makeStyles, createStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import CardMedia from '@material-ui/core/CardMedia'
import Avatar from '@material-ui/core/Avatar'
import { red } from '@material-ui/core/colors'

import clubs from '@/assets/json/AllClubs.json'

const useStyles = makeStyles(() =>
  createStyles({
    media: {
      height: 0,
      paddingTop: `56.25%`, // 16:9
    },
    avatar: {
      backgroundColor: red[500],
    },
  })
)

export const CardOverview: React.FCX = () => {
  const classes = useStyles()

  return (
    <>
      <Card>
        <CardHeader
          avatar={
            <Avatar
              sizes='40'
              variant='square'
              src={`/images/clubs/${clubs.clubData[0].list[0].clubId}.png`}
              alt={`${clubs.clubData[0].list[0].clubId}`}
            />
          }
          title={`${clubs.clubData[0].list[0].name}`}
        />
        <CardMedia className={classes.media} image='/images/paella.jpg' title='Paella dish' />
        <CardHeader
          avatar={
            <Avatar aria-label='recipe' className={classes.avatar}>
              R
            </Avatar>
          }
          title='Shrimp and Chorizo Paella'
          subheader='September 14, 2016'
        />
      </Card>
    </>
  )
}
