import React from 'react'
import App from '@/components/App'
import Link from 'next/link'
import { Grid } from '@material-ui/core'
import { CardOverview } from '@/components/commonPresentational/card/CardOverview'

export default function ClubId(): JSX.Element {
  const tag = (key) => (
    <Grid item xs={12} sm={6} key={key}>
      <Link href='/post/[postId]' as='/post/test'>
        <a>
          <CardOverview />
        </a>
      </Link>
    </Grid>
  )
  const array = [...Array(6)].map((_, i) => tag(i))
  return (
    <App>
      <Grid container spacing={3}>
        {array.map((tag) => tag)}
      </Grid>
    </App>
  )
}
