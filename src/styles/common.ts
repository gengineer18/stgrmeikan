import { css } from '@emotion/core'
import { colorText } from '@/styles/variable'

// buttons
export const styledBNaviButton = css({
  minWidth: `80px`,
  width: `25%`,
  maxWidth: `240px`,
})

export const styledIconButton = css({
  color: `${colorText}`,
  fontSize: `1.4rem`,
  transitionProperty: `color`,
  '&:hover': {
    color: `${colorText}`,
  },
  '&:focus': {
    color: `${colorText}`,
  },
})

export const baseInnerWidth = css({
  width: `100%`,
  maxWidth: `960px`,
  margin: `auto`,
})
