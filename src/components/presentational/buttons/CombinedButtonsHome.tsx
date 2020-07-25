import React from 'react'
import { ButtonHomeFilled, ButtonHomeOutlined } from '@/components/atom'

type IProps = {
  path: string
}

export const CombinedButtonsHome: React.FCX<IProps> = ({ path }) => (
  <>{path === `/` ? <ButtonHomeFilled /> : <ButtonHomeOutlined />}</>
)
