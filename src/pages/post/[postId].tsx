import React from 'react'
import App from '@/components/App'
import { PostCard } from '@/components/commonPresentational'
import { IconButton } from '@material-ui/core'
import ArrowBackIcon from '@material-ui/icons/ArrowBack'

export default function PostId(): JSX.Element {
  return (
    <App>
      <div css={{ display: `flex`, alignItems: `center` }}>
        <IconButton>
          <ArrowBackIcon />
        </IconButton>
        <span>FC東京</span>
      </div>
      <PostCard />
    </App>
  )
}
