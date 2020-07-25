import React from 'react'
import { Button } from 'antd'
import { ShareAltOutlined } from '@ant-design/icons'

type IProps = {
  onClick: () => void
}

export const ButtonShare: React.FCX<IProps> = ({ onClick }) => (
  <Button type='text' shape='circle-outline' size='large' icon={<ShareAltOutlined />} onClick={onClick} />
)
