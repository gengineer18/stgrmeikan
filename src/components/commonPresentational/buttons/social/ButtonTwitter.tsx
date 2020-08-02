import React from 'react'
import { TwitterOutlined } from '@ant-design/icons'
import { ColorButton } from '@/components/atom'
import { twitter, twitterHover } from '@/styles/variable'

interface IProps {
  usage: string
  onClick?: () => void
}

export const ButtonTwitter: React.FCX<IProps> = ({ usage, onClick }) => (
  <ColorButton
    icon={<TwitterOutlined />}
    colorText='white'
    colorMain={twitter}
    colorHover={twitterHover}
    isBlock
    onClick={onClick}
  >
    Twitterアカウントで
    {usage}
  </ColorButton>
)
