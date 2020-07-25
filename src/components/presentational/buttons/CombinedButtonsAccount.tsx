import React from 'react'
import { ButtonAccountFilled, ButtonAccountOutlined } from '@/components/atom'

type IProps = {
  path: string
}

export const CombinedButtonsAccount: React.FCX<IProps> = ({ path }) => (
  <>{path === `/mypage` ? <ButtonAccountFilled /> : <ButtonAccountOutlined />}</>
)
