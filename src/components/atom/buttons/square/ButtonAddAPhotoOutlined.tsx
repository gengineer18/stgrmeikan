import React from 'react'
import { Button } from 'antd'
import { CameraOutlined } from '@ant-design/icons'
import { styledBNaviButton, styledIconButton } from '@/styles/common'

export const ButtonAddAPhotoOutlined: React.FCX = () => (
  <Button type='text' block icon={<CameraOutlined css={styledIconButton} />} css={styledBNaviButton} />
)
