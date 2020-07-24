import React from 'react'
import { ButtonAddAPhotoFilled, ButtonAddAPhotoOutlined } from '@/components/atom'

type IProps = {
  path: string
}

export const CombinedButtonsAddAPhoto: React.FCX<IProps> = ({ path }) => (
  <>{path === `/post` ? <ButtonAddAPhotoFilled /> : <ButtonAddAPhotoOutlined />}</>
)
