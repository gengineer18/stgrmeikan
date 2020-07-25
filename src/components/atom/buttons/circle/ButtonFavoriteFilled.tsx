import React from 'react'
import { Button } from 'antd'
import { HeartFilled } from '@ant-design/icons'

type IProps = {
  onClick: () => void
}

const icon = <HeartFilled style={{ color: `#ff4081` }} />

export const ButtonFavoriteFilled: React.FCX<IProps> = ({ onClick }) => (
  <Button type='text' shape='circle-outline' size='large' icon={icon} onClick={onClick} />
)
