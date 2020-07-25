import React from 'react'
import { Button } from 'antd'
import { LeftOutlined } from '@ant-design/icons'

type IProps = {
  onClick: () => void
}

export const ButtonBack: React.FCX<IProps> = ({ onClick }) => (
  <Button type='text' shape='circle-outline' size='large' icon={<LeftOutlined />} onClick={onClick} />
)
