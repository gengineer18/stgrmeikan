import React from 'react'
import { Button } from 'antd'
import { MenuOutlined } from '@ant-design/icons'
import { styledIconButton } from '@/styles/common'

export const ButtonMenu: React.FCX = () => (
  <Button type='text' size='large' icon={<MenuOutlined />} css={styledIconButton} />
)
