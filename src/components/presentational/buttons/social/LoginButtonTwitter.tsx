import React from 'react'
import { TwitterOutlined } from '@ant-design/icons'
import { ColorButton } from '@/components/atom'
import { twitter, twitterHover } from '@/styles/variable'

export const LoginButtonTwitter: React.FCX = () => (
  <ColorButton icon={<TwitterOutlined />} colorText='white' colorMain={twitter} colorHover={twitterHover} isBlock>
    Twitterアカウントでログイン
  </ColorButton>
)
