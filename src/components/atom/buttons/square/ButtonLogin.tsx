import React from 'react'
import { Button } from 'antd'
import { LoginOutlined } from '@ant-design/icons'
import { styledIconButton } from '@/styles/common'

export const ButtonLogin: React.FCX = () => (
  <Button type='text' size='large' icon={<LoginOutlined />} css={styledIconButton} />
)
