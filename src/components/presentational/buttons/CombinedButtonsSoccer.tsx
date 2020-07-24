import React from 'react'
import { ButtonSoccerFilled, ButtonSoccerOutlined } from '@/components/atom'

type IProps = {
  path: string
}

export const CombinedButtonsSoccer: React.FCX<IProps> = ({ path }) => (
  <>{path === `/clubs` ? <ButtonSoccerFilled /> : <ButtonSoccerOutlined />}</>
)
