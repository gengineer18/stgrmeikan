import React from 'react'
import { Button } from 'antd'
import { HomeFilled } from '@ant-design/icons'
import { styledBNaviButton, styledIconButton } from '@/styles/common'

export const ButtonHomeFilledIcon: React.FCX = () => (
  <Button type='text' block icon={<HomeFilled css={styledIconButton} />} css={styledBNaviButton} />
)
