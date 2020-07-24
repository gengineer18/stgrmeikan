import React from 'react'
import { Button } from 'antd'
import { LeftOutlined } from '@ant-design/icons'

export const ButtonBack: React.FCX = () => (
  <Button type='text' shape='circle-outline' size='large' icon={<LeftOutlined />} />
)
