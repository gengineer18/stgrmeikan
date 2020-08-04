import React, { useState } from 'react'
import { makeStyles, createStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import CardMedia from '@material-ui/core/CardMedia'
import CardContent from '@material-ui/core/CardContent'
import CardActions from '@material-ui/core/CardActions'
import Avatar from '@material-ui/core/Avatar'
import Typography from '@material-ui/core/Typography'
import { red } from '@material-ui/core/colors'
import { ButtonShare, ButtonBack } from '@/components/atom'
import { CombinedButtonsFavorite } from '@/components/presentational'
import { PageHeader } from 'antd'
import { css } from '@emotion/core'

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

const styleHeader = css({
  display: `flex`,
  alignItems: `center`,
})

export const PostCard: React.FCX = () => {
  const classes = useStyles()
  const [favorite, setFavorite] = useState(false)

  const handleFavorite = () => {
    setFavorite(() => !favorite)
  }

  const handleShare = () => {
    console.log(`share`)
  }

  const handleBack = () => window.history.back()

  return (
    <>
      <div css={styleHeader}>
        <ButtonBack onClick={handleBack} />
        <PageHeader title='FC東京' avatar={{ src: `https://www.fctokyo.co.jp/common/images/logo/270.png` }} />
      </div>
      <Card>
        <CardHeader
          avatar={
            <Avatar aria-label='recipe' className={classes.avatar}>
              R
            </Avatar>
          }
          title='Shrimp and Chorizo Paella'
          subheader='September 14, 2016'
        />
        <CardMedia className={classes.media} image='/images/paella.jpg' title='Paella dish' />
        <CardContent>
          <Typography variant='body2' color='textSecondary' component='p'>
            This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup
            of frozen peas along with the mussels, if you like.
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <CombinedButtonsFavorite favorite={favorite} onClick={handleFavorite} />
          <ButtonShare onClick={handleShare} />
        </CardActions>
      </Card>
    </>
  )
}
