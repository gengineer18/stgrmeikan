import React from 'react'
import { ButtonFavoriteFilled, ButtonFavoriteOutlined } from '@/components/atom'

type IProps = {
  favorite: boolean
  onClick: () => void
}

export const CombinedButtonsFavorite: React.FCX<IProps> = ({ favorite, onClick }) => (
  <>{favorite ? <ButtonFavoriteFilled onClick={onClick} /> : <ButtonFavoriteOutlined onClick={onClick} />}</>
)
