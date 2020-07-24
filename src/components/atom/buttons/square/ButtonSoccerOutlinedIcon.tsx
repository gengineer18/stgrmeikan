import React from 'react'
import { Button } from 'antd'
import { IconSoccerOutlined } from '@/components/atom/icons/IconSoccerOutlined'
import { styledBNaviButton, styledIconButton } from '@/styles/common'

export const ButtonSoccerOutlinedIcon: React.FCX = () => (
  <Button type='text' block icon={<IconSoccerOutlined css={styledIconButton} />} css={styledBNaviButton} />
)
