import React from 'react'
import { GoogleOutlined } from '@ant-design/icons'
import { ColorButton } from '@/components/atom'
import { google, googleHover } from '@/styles/variable'

export const LoginButtonGoogle: React.FCX = () => (
  <ColorButton icon={<GoogleOutlined />} colorText='white' colorMain={google} colorHover={googleHover} isBlock>
    Googleアカウントでログイン
  </ColorButton>
)
