import React from 'react'
import { GoogleOutlined } from '@ant-design/icons'
import { ColorButton } from '@/components/atom'
import { google, googleHover } from '@/styles/variable'

interface IProps {
  usage: string
  onClick?: () => void
}

export const ButtonGoogle: React.FCX<IProps> = ({ usage, onClick }) => (
  <ColorButton
    icon={<GoogleOutlined />}
    colorText='white'
    colorMain={google}
    colorHover={googleHover}
    isBlock
    onClick={onClick}
  >
    Googleアカウントで
    {usage}
  </ColorButton>
)
