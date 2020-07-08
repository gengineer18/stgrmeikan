import React from 'react'
import { ButtonSoccerFilledIcon, ButtonSoccerOutlinedIcon } from '@/components/atoms'

type IProps = {
  path: string
}

export const CombinedButtonsSoccer: React.FCX<IProps> = ({ path }) => (
  <>{path === `/clubs` ? <ButtonSoccerFilledIcon /> : <ButtonSoccerOutlinedIcon />}</>
)
