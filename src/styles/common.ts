import { css } from '@emotion/core'

// buttons
export const styledBNaviButton = css({
  minWidth: `80px`,
  width: `25%`,
  maxWidth: `200px`,
})

export const styledIconButton = css({
  color: `white`,
  fontSize: `1.4rem`,
  transitionProperty: `color`,
  '&:hover': {
    color: `white`,
  },
  '&:focus': {
    color: `white`,
  },
})

export const baseInnerWidth = css({
  width: `100%`,
  maxWidth: `960px`,
  margin: `auto`,
})
