import React from 'react'
import { FacebookFilled } from '@ant-design/icons'
import { ColorButton } from '@/components/atom'
import { facebook, facebookHover } from '@/styles/variable'

export const LoginButtonFacebook: React.FCX = () => (
  <ColorButton icon={<FacebookFilled />} colorText='white' colorMain={facebook} colorHover={facebookHover} isBlock>
    Facebookアカウントでログイン
  </ColorButton>
)
