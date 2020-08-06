import React from 'react'
import App from '@/components/App'
import Link from 'next/link'
import { Grid } from '@material-ui/core'
import { CardOverview } from '@/components/commonPresentational/card/CardOverview'

export default function Home(): JSX.Element {
  const tag = (
    <Grid item xs={12} sm={6} key='1'>
      <Link href='/post/[postId]' as='/post/test'>
        <a>
          <CardOverview />
        </a>
      </Link>
    </Grid>
  )
  const array = []
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < 5; i++) {
    array.push(tag)
  }
  return (
    <App>
      <Grid container spacing={3}>
        {array.map((tag) => tag)}
      </Grid>
    </App>
  )
}
