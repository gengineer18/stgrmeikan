import React from 'react'
import { ButtonHomeFilledIcon, ButtonHomeOutlinedIcon } from '@/components/atom'

type IProps = {
  path: string
}

export const CombinedButtonsHome: React.FCX<IProps> = ({ path }) => (
  <>{path === `/` ? <ButtonHomeFilledIcon /> : <ButtonHomeOutlinedIcon />}</>
)
