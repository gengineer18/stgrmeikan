import React from 'react'
import App from '@/components/App'
import { PostForm } from '@/components/presentational'
import { css } from '@emotion/core'

const styleArticle = css({
  margin: `auto`,
  maxWidth: `94%`,
})

export default function PostId(): JSX.Element {
  return (
    <App>
      <article css={styleArticle}>
        <PostForm />
      </article>
    </App>
  )
}
