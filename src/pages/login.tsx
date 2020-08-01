import React from 'react'
import App from '@/components/App'
import { LoginButtonTwitter, LoginButtonFacebook, LoginButtonGoogle } from '@/components/presentational'
import { css } from '@emotion/core'

const style = css({
  marginTop: `8px`,
})

export default function Login(): JSX.Element {
  return (
    <App>
      <div css={style}>
        <LoginButtonTwitter />
      </div>
      <div css={style}>
        <LoginButtonFacebook />
      </div>
      <div css={style}>
        <LoginButtonGoogle />
      </div>
    </App>
  )
}
