import React from 'react'
import { Button } from 'antd'
import { HomeOutlined } from '@ant-design/icons'
import { styledBNaviButton, styledIconButton } from '@/styles/common'

export const ButtonHomeOutlined: React.FCX = () => (
  <Button type='text' block icon={<HomeOutlined css={styledIconButton} />} css={styledBNaviButton} />
)
