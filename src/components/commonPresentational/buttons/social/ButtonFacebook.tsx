import React from 'react'
import { FacebookFilled } from '@ant-design/icons'
import { ColorButton } from '@/components/atom'
import { facebook, facebookHover } from '@/styles/variable'

interface IProps {
  usage: string
  onClick?: () => void
}

export const ButtonFacebook: React.FCX<IProps> = ({ usage, onClick }) => (
  <ColorButton
    icon={<FacebookFilled />}
    colorText='white'
    colorMain={facebook}
    colorHover={facebookHover}
    isBlock
    onClick={onClick}
  >
    Facebookアカウントで
    {usage}
  </ColorButton>
)
