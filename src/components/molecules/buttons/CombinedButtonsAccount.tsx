import React from 'react'
import { ButtonAccountFilledIcon, ButtonAccountOutlinedIcon } from '@/components/atom'

type IProps = {
  path: string
}

export const CombinedButtonsAccount: React.FCX<IProps> = ({ path }) => (
  <>{path === `/mypage` ? <ButtonAccountFilledIcon /> : <ButtonAccountOutlinedIcon />}</>
)
