import React from 'react'
import { Button } from 'antd'
import { SmileOutlined } from '@ant-design/icons'
import { styledBNaviButton, styledIconButton } from '@/styles/common'

export const ButtonAccountOutlinedIcon: React.FCX = () => (
  <Button type='text' block icon={<SmileOutlined css={styledIconButton} />} css={styledBNaviButton} />
)
