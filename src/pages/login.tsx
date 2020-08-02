import React from 'react'
import App from '@/components/App'
import { Typography, Space, Divider } from 'antd'
import { ButtonTwitter, ButtonFacebook, ButtonGoogle } from '@/components/commonPresentational'
import { css } from '@emotion/core'
import NextLink from 'next/link'
import { TitleH1 } from '@/components/atom'

const { Paragraph, Link } = Typography

const styledWrap = css({
  maxWidth: `560px`,
  margin: `16px auto`,
  textAlign: `center`,
})

const styledSpace = css({
  display: `block`,
})

export default function Login(): JSX.Element {
  const usage = `ログイン`
  return (
    <App>
      <div css={styledWrap}>
        <TitleH1>
          J-StaGourmetに
          {usage}
        </TitleH1>
        <Divider />
        <Space direction='vertical' css={styledSpace} size='middle'>
          <ButtonTwitter usage={usage} />
          <ButtonFacebook usage={usage} />
          <ButtonGoogle usage={usage} />
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
        <Paragraph strong>
          <NextLink href='/signup'>
            <a>新規会員登録はこちら</a>
          </NextLink>
        </Paragraph>
      </div>
    </App>
  )
}
