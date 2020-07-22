import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import { ButtonMenuIcon, ButtonLoginIcon } from '@/components/atom'

// styles
import { colorPrimaryMain } from '@/styles/variable'
import { baseInnerWidth } from '@/styles/common'
import { css } from '@emotion/core'

const styleAppBar = css({
  position: `fixed`,
  left: `0px`,
  top: `0px`,
  width: `100%`,
  padding: `8px 0`,
  zIndex: 100,
  backgroundColor: `${colorPrimaryMain}`,
})

const layout = css({
  flexGrow: 1,
})

export const TheHeader: React.FCX = () => (
  <AppBar position='fixed' css={styleAppBar}>
    <Toolbar css={baseInnerWidth}>
      <div css={layout}>
        <ButtonMenuIcon />
      </div>
      <figure css={layout}>
        <img alt='J-StaGourmet' />
      </figure>
      <ButtonLoginIcon />
    </Toolbar>
  </AppBar>
)
