import React from 'react'
import { Button } from 'antd'
import { SearchOutlined } from '@ant-design/icons'

export const ButtonPrimary: React.FCX = ({ children }: { children: React.ReactNode }) => (
  <Button type='primary' icon={<SearchOutlined />}>
    {children}
  </Button>
)
