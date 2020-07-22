import React from 'react'
import { Button } from 'antd'
import { SmileFilled } from '@ant-design/icons'
import { styledBNaviButton, styledIconButton } from '@/styles/common'

export const ButtonAccountFilledIcon: React.FCX = () => (
  <Button type='text' block icon={<SmileFilled css={styledIconButton} />} css={styledBNaviButton} />
)
