import React from 'react'
import { Button } from 'antd'
import { css } from '@emotion/core'
import { white, black } from '@/styles/variable'

interface IProps {
  children: React.ReactNode
  icon: React.ReactNode
  colorText: 'black' | 'white'
  colorMain: string
  colorHover: string
  height?: number
  isBlock?: boolean
  onClick: () => void
}

export const ColorButton: React.FCX<IProps> = ({
  children,
  icon,
  colorText,
  colorMain,
  colorHover,
  height = 40,
  isBlock,
  onClick,
}) => {
  const style = css({
    color: colorText === `black` ? black : white,
    backgroundColor: colorMain,
    '&:hover': {
      color: colorText === `black` ? black : white,
      backgroundColor: colorHover,
    },
    '&:focus': {
      color: colorText === `black` ? black : white,
      backgroundColor: colorHover,
    },
    height: `${height}px`,
    fontSize: `1rem`,
  })

  return (
    <Button icon={icon} block={isBlock} css={style} type='link' onClick={onClick}>
      {children}
    </Button>
  )
}
