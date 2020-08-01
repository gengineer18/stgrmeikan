import React from 'react'
import App from '@/components/App'
import { Typography, Space, Divider } from 'antd'
import { LoginButtonTwitter, LoginButtonFacebook, LoginButtonGoogle } from '@/components/presentational'
import { css } from '@emotion/core'
import NextLink from 'next/link'

const { Title, Paragraph, Link } = Typography

const styledWrap = css({
  maxWidth: `560px`,
  margin: `16px auto`,
  textAlign: `center`,
})

const styledTitle = css({
  fontSize: `1.8rem`,
})

const styledSpace = css({
  display: `block`,
})

export default function Login(): JSX.Element {
  return (
    <App>
      <div css={styledWrap}>
        <Title>
          <span css={styledTitle}>ログイン</span>
        </Title>
        <Divider />
        <Space direction='vertical' css={styledSpace} size='middle'>
          <LoginButtonTwitter />
          <LoginButtonFacebook />
          <LoginButtonGoogle />
        </Space>
        <Divider />
        <Paragraph>
          ログインすることにより、
          <br />
          <Link href='/terms' target='_blank'>
            利用規約
          </Link>
          および
          <Link href='/privacy' target='_blank'>
            プライバシーポリシー
          </Link>
          に同意したとみなされます。
        </Paragraph>
        <Paragraph>
          <NextLink href='/signup'>
            <a>新規会員登録</a>
          </NextLink>
          はこちら
        </Paragraph>
      </div>
    </App>
  )
}
