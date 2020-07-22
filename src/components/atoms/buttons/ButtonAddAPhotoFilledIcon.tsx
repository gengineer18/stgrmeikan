import React from 'react'
import { Button } from 'antd'
import { CameraFilled } from '@ant-design/icons'
import { styledBNaviButton, styledIconButton } from '@/styles/common'

export const ButtonAddAPhotoFilledIcon: React.FCX = () => (
  <Button type='text' block icon={<CameraFilled css={styledIconButton} />} css={styledBNaviButton} />
)
