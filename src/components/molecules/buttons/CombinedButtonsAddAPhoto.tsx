import React from 'react'
import { ButtonAddAPhotoFilledIcon, ButtonAddAPhotoOutlinedIcon } from '@/components/atom'

type IProps = {
  path: string
}

export const CombinedButtonsAddAPhoto: React.FCX<IProps> = ({ path }) => (
  <>{path === `/post` ? <ButtonAddAPhotoFilledIcon /> : <ButtonAddAPhotoOutlinedIcon />}</>
)
