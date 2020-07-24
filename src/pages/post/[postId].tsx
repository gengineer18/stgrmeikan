import React from 'react'
import App from '@/components/App'
import { PostCard } from '@/components/presentational'
import { ButtonBack } from '@/components/atom'

export default function PostId(): JSX.Element {
  return (
    <App>
      <div css={{ display: `flex`, alignItems: `center` }}>
        <ButtonBack />
        <span>FC東京</span>
      </div>
      <PostCard />
    </App>
  )
}
