import React from 'react'
import { Button } from 'antd'
import { IconSoccerFilled } from '@/components/atom/icons/IconSoccerFilled'
import { styledBNaviButton, styledIconButton } from '@/styles/common'

export const ButtonSoccerFilled: React.FCX = () => (
  <Button type='text' block icon={<IconSoccerFilled css={styledIconButton} />} css={styledBNaviButton} />
)
