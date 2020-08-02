import React from 'react'
import { Typography } from 'antd'
import { css } from '@emotion/core'

const { Title } = Typography

const styledTitle = css({
  fontSize: `1.6rem`,
})

export const TitleH1: React.FCX = ({ children }) => (
  <Title level={1}>
    <span css={styledTitle}>{children}</span>
  </Title>
)
