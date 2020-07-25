import React from 'react'
import { Button } from 'antd'
import { HeartTwoTone } from '@ant-design/icons'

type IProps = {
  onClick: () => void
}

const icon = <HeartTwoTone twoToneColor='#ff4081' />

export const ButtonFavoriteOutlined: React.FCX<IProps> = ({ onClick }) => (
  <Button type='text' shape='circle-outline' size='large' icon={icon} onClick={onClick} />
)
