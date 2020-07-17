import React from 'react'
import { TheHeader, BNavigation } from '@/components/organisms'

// styles
import { css } from '@emotion/core'
import { baseInnerWidth } from '@/styles/common'

const mainWrap = css({
  width: `100%`,
  minHeight: `calc(100vh - 100px)`,
  padding: `96px 8px 72px`,
})

const App: React.FCX = ({ children }: { children: React.ReactNode }) => (
  <>
    <TheHeader />
    <main css={mainWrap}>
      <section css={baseInnerWidth}>{children}</section>
    </main>
    <BNavigation />
  </>
)

export default App
